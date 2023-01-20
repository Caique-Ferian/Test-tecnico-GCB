import { Injectable } from '@nestjs/common';
import { Medic } from '../entities/medic';
import { MedicRepository } from './repositories/medic-repository';

interface FindByInfosRequest {
  type: string;
  info: string;
}

interface FindByInfosResponse {
  medic: Medic[];
}

@Injectable()
export class FindByInfos {
  constructor(private medicRepository: MedicRepository) {}

  public async execute(
    request: FindByInfosRequest,
  ): Promise<FindByInfosResponse> {
    const { info, type } = request;
    const medic = await this.medicRepository.findByMedicInfo(type, info);
    return { medic };
  }
}
