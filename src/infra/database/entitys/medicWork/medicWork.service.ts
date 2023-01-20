import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { MEDIC_WORK_REPOSITORY } from '../../database.constants';
import { WorkInfo } from '../../../../app/entities/workInfo';
import { MedicWork } from './medicWork.entity';
import { Op } from 'sequelize';

@Injectable()
export class MedicWorkService {
  constructor(
    @Inject(MEDIC_WORK_REPOSITORY)
    private medicWorkRepository: typeof MedicWork,
  ) {}

  async create(workInfo: WorkInfo): Promise<number> {
    const { landline, address, district, city, uf } = workInfo;
    const { id } = await this.medicWorkRepository.create<MedicWork>({
      landline: +landline,
      address,
      district,
      city,
      uf,
    });
    return id;
  }

  async findOneByType(type: string, info: string): Promise<MedicWork | null> {
    const workInfo = await this.medicWorkRepository.findOne<MedicWork>({
      where: { [type]: { [Op.like]: `%${info}%` } },
    });
    if (!workInfo) return null;
    return workInfo;
  }

  async findAllByType(type: string, info: string): Promise<MedicWork[]> {
    const workInfos = await this.medicWorkRepository.findAll<MedicWork>({
      where: { [type]: { [Op.like]: `%${info}%` } },
    });
    return workInfos;
  }
}
