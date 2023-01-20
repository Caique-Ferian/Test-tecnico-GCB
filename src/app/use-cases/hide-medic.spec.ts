import { InMemoryMedicRepository } from '../../../test/repositories/in-memory-medic-repository';
import { makeMedic } from '../../../test/factories/make-medic';
import { MedicNotFound } from './errors/medicNotFound';
import { HideMedic } from './hide-medic';

describe('Testing use-case Hide Medic', () => {
  it('should be able to hide a medic status', async () => {
    const inMemoryMedicRepository = new InMemoryMedicRepository();
    const hideMedic = new HideMedic(inMemoryMedicRepository);
    const medic = makeMedic();
    await inMemoryMedicRepository.create(medic);
    await hideMedic.execute({ id: '1234567' });
    expect(inMemoryMedicRepository.medics[0].active).toBeFalsy();
  });
  it('should not be able to hide a medic status of an nonexistent medic', async () => {
    const inMemoryMedicRepository = new InMemoryMedicRepository();
    const hideMedic = new HideMedic(inMemoryMedicRepository);
    expect(() => hideMedic.execute({ id: '1234567' })).rejects.toThrow(
      MedicNotFound,
    );
  });
});
