import { Medic } from '../../src/app/entities/medic';
import { CreateMedicRequest } from '../../src/app/use-cases/create-medic';
import { MedicName } from '../../src/app/entities/medicName';
import { MedicCrm } from '../../src/app/entities/medicCrm';
import { MedicExpertise } from '../../src/app/entities/medicExpertise';
import { WorkInfo } from '../../src/app/entities/workInfo';

type Override = Partial<CreateMedicRequest>;

export function makeMedic(override: Override = {}) {
  return new Medic(
    {
      name: new MedicName(override.name ?? 'Ricardo da Silva'),
      crm: new MedicCrm(override.crm ?? 1234567),
      cellphone: 19912345678,
      workInfo: new WorkInfo({
        landline: 1938563567,
        address: 'Rua Teste 115',
        district: 'Testador',
        city: 'São Paulo',
        uf: 'SP',
      }),
      expertise: new MedicExpertise(
        override.expertise ?? ['Cardiologista', 'Clinico Geral'],
      ),
    },
    '1234567',
  );
}
