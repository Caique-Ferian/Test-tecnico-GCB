import { InMemoryMedicRepository } from '../../../test/repositories/in-memory-medic-repository';
import { makeMedic } from '../../../test/factories/make-medic';
import { UpdateMedicWorkInfo } from './update-medic-workInfo';
import { MedicNotFound } from './errors/medicNotFound';

describe('Testing use-case Update WorkInfo Medic', () => {
  it('should be able to update one workInfo of a medic', async () => {
    const inMemoryMedicRepository = new InMemoryMedicRepository();
    const updateMedicWorkInfo = new UpdateMedicWorkInfo(
      inMemoryMedicRepository,
    );
    const medic = makeMedic();
    await inMemoryMedicRepository.create(medic);
    const landline = 1234556798;
    await updateMedicWorkInfo.execute('1234567', {
      landline,
      address: medic.workInfo.address,
      district: medic.workInfo.district,
      city: medic.workInfo.city,
      uf: medic.workInfo.uf,
    });
    expect(inMemoryMedicRepository.medics[0].workInfo.landline).toEqual(
      landline,
    );
  });
  it('should not be able to update workInfo of an nonexistent medic', async () => {
    const inMemoryMedicRepository = new InMemoryMedicRepository();
    const updateMedicWorkInfo = new UpdateMedicWorkInfo(
      inMemoryMedicRepository,
    );
    const landline = 1234556798;
    expect(() =>
      updateMedicWorkInfo.execute('1234567', {
        landline,
        address: 'teste',
        district: 'teste',
        city: 'São Paulo',
        uf: 'SP',
      }),
    ).rejects.toThrow(MedicNotFound);
  });
});
