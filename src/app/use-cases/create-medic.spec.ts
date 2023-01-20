import { CreateMedic } from './create-medic';
import { InMemoryMedicRepository } from '../../../test/repositories/in-memory-medic-repository';

describe('Testing use-case Create Medic', () => {
  it('should be able to create a medic', async () => {
    const inMemoryMedicRepository = new InMemoryMedicRepository();
    const createMedic = new CreateMedic(inMemoryMedicRepository);
    const { medic } = await createMedic.execute({
      name: 'Ricardo da Silva',
      crm: 1234567,
      landline: 1938563567,
      cellphone: 19912345678,
      address: 'Rua Teste 115',
      district: 'Testador',
      city: 'São Paulo',
      uf: 'SP',
      expertise: ['Cardiologista', 'Clinico Geral'],
    });
    expect(inMemoryMedicRepository.medics).toHaveLength(1);
    expect(inMemoryMedicRepository.medics[0]).toEqual(medic);
  });
});
