import { MedicExpertise } from './medicExpertise';

describe('Medic Expertise test', () => {
  it('should be able  to create a medic expertise', () => {
    const medicExpertise = new MedicExpertise([
      'cardiologia clínica',
      'cardiologia infantil',
    ]);
    expect(medicExpertise).toBeInstanceOf(MedicExpertise);
  });
  it('should not be able to create a medic name with more than 120 characters', () => {
    expect(() => new MedicExpertise(['teste'])).toThrow;
  });
});
