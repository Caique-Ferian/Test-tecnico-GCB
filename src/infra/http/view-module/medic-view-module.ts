import { Medic } from '../../../app/entities/medic';

export interface MedicHTTP {
  id: string;
  name: string;
  crm: number;
  landline: number;
  cellphone: number;
  address: string;
  district: string;
  city: string;
  uf: string;
  expertise: string[];
  active: boolean;
}

export class MedicViewModule {
  static toHTTP(medic: Medic): MedicHTTP {
    return {
      id: medic.id,
      name: medic.name.value,
      crm: medic.crm.value,
      cellphone: medic.cellphone,
      landline: medic.workInfo.landline,
      address: medic.workInfo.address,
      district: medic.workInfo.district,
      city: medic.workInfo.city,
      uf: medic.workInfo.uf,
      expertise: medic.expertise.value,
      active: medic.active,
    };
  }
}
