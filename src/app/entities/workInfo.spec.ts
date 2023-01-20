import { WorkInfo } from './workInfo';

describe('workInfo test', () => {
  it('should be able to create a medic', () => {
    const workInfo = new WorkInfo({
      landline: 1938074564,
      address: 'rua teste',
      district: 'Teste',
      city: 'São Paulo',
      uf: 'SP',
    });
    expect(workInfo).toBeInstanceOf(WorkInfo);
  });
});
