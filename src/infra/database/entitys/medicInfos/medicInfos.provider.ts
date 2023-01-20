import { MEDIC_INFOS_REPOSITORY } from '../../database.constants';
import { MedicInfos } from './medicInfos.entity';
export const medicInfosProvider = [
  {
    provide: MEDIC_INFOS_REPOSITORY,
    useValue: MedicInfos,
  },
];
