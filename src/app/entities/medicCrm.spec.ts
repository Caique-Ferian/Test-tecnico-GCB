import { MedicCrm } from './medicCrm';

describe('Medic Crm test', () => {
  it('should be able  to create a medic crm', () => {
    const medicCrm = new MedicCrm(123);
    expect(medicCrm).toBeInstanceOf(MedicCrm);
  });
  it('should not be able to create a medic crm with more than 7 characters', () => {
    expect(() => new MedicCrm(12345678)).toThrow;
  });
});
