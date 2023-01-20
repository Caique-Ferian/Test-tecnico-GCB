import { makeMedic } from '../../../test/factories/make-medic';
import { InMemoryMedicRepository } from '../../../test/repositories/in-memory-medic-repository';
import { FindByInfos } from './find-medic-by-infos';

describe('Testing use-case Find Medic By Infos', () => {
  it('should be able to find a medic by CRM', async () => {
    const inMemoryMedicRepository = new InMemoryMedicRepository();
    const findMedicByInfos = new FindByInfos(inMemoryMedicRepository);
    await inMemoryMedicRepository.create(makeMedic());
    await inMemoryMedicRepository.create(
      makeMedic({
        name: 'Caique Ferian',
        crm: 3456780,
        expertise: ['Cardiologista', 'Urologista'],
      }),
    );
    const { medic } = await findMedicByInfos.execute({
      type: 'crm',
      info: '3456780',
    });
    expect(medic).toHaveLength(1);
    expect(medic[0].crm.value).toEqual(3456780);
  });
  it('should be able to find a medic by NAME', async () => {
    const inMemoryMedicRepository = new InMemoryMedicRepository();
    const findMedicByInfos = new FindByInfos(inMemoryMedicRepository);
    await inMemoryMedicRepository.create(makeMedic());
    await inMemoryMedicRepository.create(
      makeMedic({
        name: 'Caique Ferian',
        crm: 3456780,
        expertise: ['Cardiologista', 'Urologista'],
      }),
    );
    const { medic } = await findMedicByInfos.execute({
      type: 'name',
      info: 'Caique Ferian',
    });
    expect(medic).toHaveLength(1);
    expect(medic[0].name.value).toEqual('Caique Ferian');
  });
  it('should be able to find a medics by EXPERTISES', async () => {
    const inMemoryMedicRepository = new InMemoryMedicRepository();
    const findMedicByInfos = new FindByInfos(inMemoryMedicRepository);
    await inMemoryMedicRepository.create(makeMedic());
    await inMemoryMedicRepository.create(
      makeMedic({
        name: 'Caique Ferian',
        crm: 3456780,
        expertise: ['Cardiologista', 'Urologista'],
      }),
    );
    const { medic } = await findMedicByInfos.execute({
      type: 'expertise',
      info: 'Cardiologista',
    });
    expect(medic).toHaveLength(2);
    expect(medic[0].name.value).toEqual('Ricardo da Silva');
  });
});
