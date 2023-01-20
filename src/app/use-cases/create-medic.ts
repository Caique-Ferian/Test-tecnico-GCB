import { Injectable } from '@nestjs/common';
import { Medic } from '../entities/medic';
import { MedicRepository } from './repositories/medic-repository';
import { MedicName } from '../entities/medicName';
import { MedicCrm } from '../entities/medicCrm';
import { WorkInfo } from '../entities/workInfo';
import { MedicExpertise } from '../entities/medicExpertise';

export interface CreateMedicRequest {
  name: string;
  crm: number;
  landline: number;
  cellphone: number;
  address: string;
  district: string;
  city: string;
  uf: string;
  expertise: string[];
}

export interface CreateMedicResponse {
  medic: Medic;
}

@Injectable()
export class CreateMedic {
  constructor(private medicRepository: MedicRepository) {}

  public async execute(
    request: CreateMedicRequest,
  ): Promise<CreateMedicResponse> {
    const {
      name,
      crm,
      landline,
      cellphone,
      address,
      district,
      city,
      uf,
      expertise,
    } = request;
    const medic = new Medic({
      name: new MedicName(name),
      crm: new MedicCrm(+crm),
      cellphone: +cellphone,
      workInfo: new WorkInfo({
        landline: +landline,
        address,
        district,
        city,
        uf,
      }),
      expertise: new MedicExpertise(expertise),
    });
    await this.medicRepository.create(medic);

    return { medic };
  }
}
