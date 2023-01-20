import { MEDIC_WORK_REPOSITORY } from '../../database.constants';
import { MedicWork } from './medicWork.entity';

export const medicWorkProvider = [
  {
    provide: MEDIC_WORK_REPOSITORY,
    useValue: MedicWork,
  },
];
