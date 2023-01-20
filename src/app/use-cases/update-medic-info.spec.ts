import { InMemoryMedicRepository } from '../../../test/repositories/in-memory-medic-repository';
import { UpdateMedicInfo } from './update-medic-info';
import { makeMedic } from '../../../test/factories/make-medic';
import { MedicNotFound } from './errors/medicNotFound';

describe('Testing use-case Update Info Medic', () => {
  it('should be able to update expertise of a medic', async () => {
    const inMemoryMedicRepository = new InMemoryMedicRepository();
    const updateMedicExpertise = new UpdateMedicInfo(inMemoryMedicRepository);
    const medic = makeMedic();
    await inMemoryMedicRepository.create(medic);
    await updateMedicExpertise.execute('1234567', {
      expertise: 'Programador',
    });
    expect(inMemoryMedicRepository.medics[0].expertise.value).toHaveLength(3);
  });
  it('should not be able to update expertise of an nonexistent medic', async () => {
    const inMemoryMedicRepository = new InMemoryMedicRepository();
    const updateMedicExpertise = new UpdateMedicInfo(inMemoryMedicRepository);
    expect(() =>
      updateMedicExpertise.execute('1234567', {
        expertise: 'Programador',
      }),
    ).rejects.toThrow(MedicNotFound);
  });
});
