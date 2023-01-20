import { MedicName } from '../../../app/entities/medicName';
import { Medic } from '../../../app/entities/medic';
import { MedicInfos } from '../entitys/medicInfos/medicInfos.entity';
import { MedicCrm } from '../../../app/entities/medicCrm';
import { WorkInfo } from '../../../app/entities/workInfo';
import { MedicExpertise } from '../../../app/entities/medicExpertise';

export class SequelizeMedicMapper {
  static toSequelize(medic: Medic) {
    return {
      id: medic.id,
      name: medic.name.value,
      crm: medic.crm.value,
      cellphone: medic.cellphone,
      workInfo: medic.workInfo,
      address: medic.workInfo.address,
      expertises: medic.expertise.value,
      active: medic.active,
    };
  }
  static toDomain(medicInfo: MedicInfos): Medic {
    const expertises = medicInfo.expertise.split(';');
    return new Medic(
      {
        name: new MedicName(medicInfo.name),
        crm: new MedicCrm(medicInfo.crm),
        cellphone: medicInfo.cellphone,
        workInfo: new WorkInfo({
          landline: medicInfo.work.landline,
          address: medicInfo.work.address,
          district: medicInfo.work.district,
          city: medicInfo.work.city,
          uf: medicInfo.work.uf,
        }),
        expertise: new MedicExpertise(expertises),
      },
      medicInfo.id,
      medicInfo.active,
    );
  }
}
