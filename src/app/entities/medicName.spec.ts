import { MedicName } from './medicName';

describe('Medic Name test', () => {
  it('should be able  to create a medic name', () => {
    const medicName = new MedicName('Ricardo da Silva');
    expect(medicName).toBeInstanceOf(MedicName);
  });
  it('should not be able to create a medic name with more than 120 characters', () => {
    expect(() => new MedicName('a'.repeat(121))).toThrow;
  });
});
