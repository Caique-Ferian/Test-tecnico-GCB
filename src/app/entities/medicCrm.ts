export class MedicCrm {
  private readonly crm: number;

  constructor(crm: number) {
    if (String(crm).length > 7) {
      throw new Error('CRM is too big');
    }
    this.crm = crm;
  }
  public get value(): number {
    return this.crm;
  }
}
