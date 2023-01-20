import { Injectable } from '@nestjs/common';
import { Medic } from '../entities/medic';
import { MedicRepository } from './repositories/medic-repository';

interface FindByWorkInfosRequest {
  type: string;
  info: string;
}

interface FindByWorkInfosResponse {
  medics: Medic[];
}

@Injectable()
export class FindWorkByInfos {
  constructor(private medicRepository: MedicRepository) {}

  public async execute(
    request: FindByWorkInfosRequest,
  ): Promise<FindByWorkInfosResponse> {
    const { info, type } = request;
    const medics = await this.medicRepository.findByWorkInfo(type, info);
    return { medics };
  }
}
