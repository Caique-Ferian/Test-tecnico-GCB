import { Medic } from 'src/app/entities/medic';
import { MedicRepository } from 'src/app/use-cases/repositories/medic-repository';

export class InMemoryMedicRepository implements MedicRepository {
  public medics: Medic[] = [];

  public async findByMedicInfo(
    type: string,
    info: string,
  ): Promise<Medic[] | null> {
    return this.medics.filter((e) =>
      type === 'expertise'
        ? e[type].value.includes(String(info))
        : type === 'id'
        ? e[type] === info
        : type === 'crm'
        ? e[type].value === +info
        : e[type].value === info,
    );
  }

  public async findByWorkInfo(
    type: string,
    info: string,
  ): Promise<Medic[] | null> {
    const intInfo = ['landline', 'cellphone'];
    return this.medics.filter((e) =>
      intInfo.includes(type)
        ? e.workInfo[type] === +info
        : e.workInfo[type] === info,
    );
  }

  public async create(medic: Medic) {
    this.medics.push(medic);
  }
  public async save(medic: Medic): Promise<void> {
    const medicIndex = this.medics.findIndex((e) => e.crm === medic.crm);
    if (medicIndex >= 0) {
      this.medics[medicIndex] = medic;
    }
  }
}
