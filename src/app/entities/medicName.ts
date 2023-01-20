export class MedicName {
  private readonly name: string;

  constructor(name: string) {
    if (name.length > 120) {
      throw new Error('Name is too big');
    }
    this.name = name;
  }
  public get value(): string {
    return this.name;
  }
}
