import { Injectable } from '@nestjs/common';
import { MedicRepository } from './repositories/medic-repository';
import { MedicNotFound } from './errors/medicNotFound';
import { WorkInfo } from '../entities/workInfo';

interface UpdateMedicWorkInfoRequest {
  landline?: number;
  address: string;
  district: string;
  city: string;
  uf: string;
}

@Injectable()
export class UpdateMedicWorkInfo {
  constructor(private medicRepository: MedicRepository) {}

  public async execute(
    id: string,
    request: UpdateMedicWorkInfoRequest,
  ): Promise<void> {
    const { landline, address, district, city, uf } = request;
    console.log(address);
    const medic = await this.medicRepository.findByMedicInfo('id', id);
    if (!medic.length) throw new MedicNotFound();
    medic[0].workInfo = new WorkInfo({
      landline: landline ?? medic[0].workInfo.landline,
      address: address,
      district,
      city,
      uf,
    });
    await this.medicRepository.save(medic[0]);
  }
}
