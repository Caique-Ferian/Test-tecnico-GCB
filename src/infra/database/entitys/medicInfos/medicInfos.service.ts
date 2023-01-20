import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { MEDIC_INFOS_REPOSITORY } from '../../database.constants';
import { MedicInfos } from './medicInfos.entity';
import { MedicWork } from '../medicWork/medicWork.entity';

interface IMedic {
  id: string;
  name: string;
  crm: number;
  cellphone: number;
  workInfo: number;
  expertise: string;
  active: boolean;
}

@Injectable()
export class MedicInfosService {
  constructor(
    @Inject(MEDIC_INFOS_REPOSITORY)
    private medicInfosRepository: typeof MedicInfos,
  ) {}

  async create(medic: IMedic): Promise<void> {
    const { id, name, crm, cellphone, workInfo, expertise, active } = medic;
    await this.medicInfosRepository.create<MedicInfos>({
      id,
      name,
      crm,
      cellphone,
      workInfo,
      expertise,
      active,
    });
  }

  async update(medic: IMedic): Promise<void> {
    await this.medicInfosRepository.update(
      { ...medic },
      { where: { id: medic.id } },
    );
  }

  async findByType(type: string, info: string): Promise<MedicInfos[]> {
    const useParseInt = ['crm', 'workInfo', 'cellphone'];
    const infoData = useParseInt.includes(type)
      ? +info
      : type === 'id'
      ? info
      : info === 'false'
      ? false
      : true;
    const medics = await this.medicInfosRepository.findAll({
      where: { [type]: infoData },
      include: [MedicWork],
    });
    return medics.filter((e) => info ?? e.active !== false);
  }
  async findByTypeWithLike(type: string, info: string): Promise<MedicInfos[]> {
    const medics = await this.medicInfosRepository.findAll({
      where: { [type]: { [Op.like]: `%${info}%` } },
      include: [MedicWork],
    });
    return medics.filter((e) => e.active !== false);
  }
}
