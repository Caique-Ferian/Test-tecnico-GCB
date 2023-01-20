export class MedicExpertise {
  private readonly expertise: string[];

  constructor(expertise: string[]) {
    if (expertise.length < 2) {
      throw new Error('It must be added at least two expertises ');
    }
    this.expertise = expertise;
  }
  public get value(): string[] {
    return this.expertise;
  }
}
