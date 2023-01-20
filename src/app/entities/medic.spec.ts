import { Medic } from './medic';
import { MedicName } from './medicName';
import { WorkInfo } from './workInfo';
import { MedicCrm } from './medicCrm';
import { MedicExpertise } from './medicExpertise';

describe('Medic test', () => {
  it('should be able to create a medic', () => {
    const medic = new Medic({
      name: new MedicName('Ricardo da Silva'),
      crm: new MedicCrm(1234567),
      cellphone: 19998765432,
      workInfo: new WorkInfo({
        landline: 1938074564,
        address: 'rua teste',
        district: 'Teste',
        city: 'São Paulo',
        uf: 'SP',
      }),
      expertise: new MedicExpertise([
        'cardiologia clínica',
        'cardiologia infantil',
      ]),
    });
    expect(medic).toBeInstanceOf(Medic);
  });
});
