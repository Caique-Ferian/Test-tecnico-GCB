import { EXPERTISE_REPOSITORY } from '../../database.constants';
import { Expertise } from './expertise.entity';
export const expertiseProvider = [
  {
    provide: EXPERTISE_REPOSITORY,
    useValue: Expertise,
  },
];
