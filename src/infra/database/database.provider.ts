import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from './database.config';
import { Expertise } from './entitys/expertise/expertise.entity';
import { SEQUELIZE } from './database.constants';
import { MedicInfos } from './entitys/medicInfos/medicInfos.entity';
import { MedicWork } from './entitys/medicWork/medicWork.entity';

export const databaseProvider = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize(databaseConfig);
      sequelize.addModels([Expertise, MedicInfos, MedicWork]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
