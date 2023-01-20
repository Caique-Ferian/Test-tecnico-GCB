import { Injectable } from '@nestjs/common';
import { MedicRepository } from './repositories/medic-repository';
import { MedicExpertise } from '../entities/medicExpertise';
import { MedicNotFound } from './errors/medicNotFound';

interface UpdateMedicInfoRequest {
  expertise: string | string[];
  cellphone?: number;
}

@Injectable()
export class UpdateMedicInfo {
  constructor(private medicRepository: MedicRepository) {}

  public async execute(
    id: string,
    request: UpdateMedicInfoRequest,
  ): Promise<void> {
    const { expertise, cellphone } = request;
    const medic = await this.medicRepository.findByMedicInfo('id', id);
    if (!medic.length) throw new MedicNotFound();
    if (cellphone) medic[0].cellphone = cellphone;
    if (typeof expertise === 'string') {
      medic[0].expertise = new MedicExpertise([
        ...medic[0].expertise.value,
        expertise,
      ]);
    } else {
      medic[0].expertise = new MedicExpertise([
        ...medic[0].expertise.value,
        ...expertise,
      ]);
    }

    await this.medicRepository.save(medic[0]);
  }
}
