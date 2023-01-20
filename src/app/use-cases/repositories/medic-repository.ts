import { Medic } from '../../entities/medic';

export abstract class MedicRepository {
  abstract create(medic: Medic): Promise<void>;
  abstract save(medic: Medic): Promise<void>;
  abstract findByMedicInfo(
    type: string,
    info: string | number,
  ): Promise<Medic[] | null>;
  abstract findByWorkInfo(
    type: string,
    info: number | string,
  ): Promise<Medic[] | null>;
}
