import { makeMedic } from '../../../test/factories/make-medic';
import { InMemoryMedicRepository } from '../../../test/repositories/in-memory-medic-repository';
import { FindWorkByInfos } from './find-medic-by-work-infos';

describe('Testing use-case Find Medic By Work Infos', () => {
  it('should be able to find medics by LANDLINE', async () => {
    const inMemoryMedicRepository = new InMemoryMedicRepository();
    const findMedicByWorkInfos = new FindWorkByInfos(inMemoryMedicRepository);
    await inMemoryMedicRepository.create(makeMedic());
    await inMemoryMedicRepository.create(
      makeMedic({
        name: 'Caique Ferian',
        crm: 3456780,
        expertise: ['Cardiologista', 'Urologista'],
      }),
    );
    const { medics } = await findMedicByWorkInfos.execute({
      type: 'landline',
      info: '1938563567',
    });
    expect(medics).toHaveLength(2);
  });
  it('should be able to find medics by ADDRESS', async () => {
    const inMemoryMedicRepository = new InMemoryMedicRepository();
    const findMedicByInfos = new FindWorkByInfos(inMemoryMedicRepository);
    await inMemoryMedicRepository.create(makeMedic());
    await inMemoryMedicRepository.create(
      makeMedic({
        name: 'Caique Ferian',
        crm: 3456780,
        expertise: ['Cardiologista', 'Urologista'],
      }),
    );
    const { medics } = await findMedicByInfos.execute({
      type: 'address',
      info: 'Rua Teste 115',
    });
    expect(medics).toHaveLength(2);
  });
});
