import { Inject, Injectable } from '@nestjs/common';
import { Medic } from 'src/app/entities/medic';
import { MedicRepository } from '../../app/use-cases/repositories/medic-repository';
import { MedicWorkService } from './entitys/medicWork/medicWork.service';
import { MedicInfosService } from './entitys/medicInfos/medicInfos.service';
import { ExpertiseService } from './entitys/expertise/expertise.service';
import { SequelizeMedicMapper } from './mappers/sequelize-medics-mapper';
import { MedicInfos } from './entitys/medicInfos/medicInfos.entity';

@Injectable()
export class SequelizeMedicRepository implements MedicRepository {
  constructor(
    @Inject(MedicInfosService)
    private medicInfosService: MedicInfosService,
    @Inject(MedicWorkService)
    private medicWorkService: MedicWorkService,
    @Inject(ExpertiseService) private expertiseService: ExpertiseService,
  ) {}
  async create(medic: Medic): Promise<void> {
    const { id, name, crm, cellphone, workInfo, address, expertises, active } =
      SequelizeMedicMapper.toSequelize(medic);
    const hasAddress = await this.medicWorkService.findOneByType(
      'address',
      address,
    );
    const expertiseIds = await this.expertiseService.findByExpertise(
      expertises,
    );
    let workId: number;
    if (!hasAddress) {
      workId = await this.medicWorkService.create(workInfo);
    } else {
      workId = hasAddress.id;
    }
    await this.medicInfosService.create({
      id,
      name,
      crm: crm,
      cellphone: cellphone,
      workInfo: workId,
      expertise: expertiseIds.join(';'),
      active,
    });
  }
  async save(medic: Medic): Promise<void> {
    const { id, address, expertises, name, crm, cellphone, active } =
      SequelizeMedicMapper.toSequelize(medic);
    const work = await this.medicWorkService.findOneByType('address', address);
    if (!work) throw new Error("Cant't this address in DB");
    const expertiseIds = await this.expertiseService.findByExpertise(
      expertises,
    );
    await this.medicInfosService.update({
      id,
      expertise: expertiseIds.join(';'),
      name,
      crm,
      cellphone,
      active,
      workInfo: work.id,
    });
  }
  async findByMedicInfo(type: string, info: string): Promise<Medic[]> {
    let infoData = info;
    let medics: MedicInfos[];
    const useFindByWithLike = ['name', 'expertise'];
    if (useFindByWithLike.includes(type)) {
      if (type === 'expertise') {
        const expertiseId = await this.expertiseService.findByExpertise([info]);
        infoData = String(expertiseId[0]);
      }
      medics = await this.medicInfosService.findByTypeWithLike(type, infoData);
    } else {
      medics = await this.medicInfosService.findByType(type, infoData);
    }
    await Promise.all(
      medics.map(async (medic) => {
        const expertises = await this.expertiseService.findById(
          medic.expertise.split(';'),
        );
        medic.expertise = expertises.join(';');
      }),
    );
    return medics.map(SequelizeMedicMapper.toDomain);
  }
  async findByWorkInfo(type: string, info: string): Promise<Medic[]> {
    const useFindOne = ['landline', 'cellphone'];
    let medics: MedicInfos[];
    if (useFindOne.includes(type)) {
      const workInfo = await this.medicWorkService.findOneByType(type, info);
      if (!workInfo) return [];
      medics = await this.medicInfosService.findByType(
        'workInfo',
        String(workInfo.id),
      );
    } else {
      const workInfos = await this.medicWorkService.findAllByType(type, info);
      medics = [];
      await Promise.all(
        workInfos.map(async ({ id }) => {
          const data = await this.medicInfosService.findByType(
            'workInfo',
            String(id),
          );
          medics.push(...data);
        }),
      );
    }
    return medics.map(SequelizeMedicMapper.toDomain);
  }
}
