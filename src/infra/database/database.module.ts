import { Module } from '@nestjs/common';
import { MedicInfosModule } from './entitys/medicInfos/medicInfos.module';
import { MedicWorkModule } from './entitys/medicWork/medicWork.module';
import { ExpertiseModule } from './entitys/expertise/expertise.module';
import { databaseProvider } from './database.provider';
import { SequelizeMedicRepository } from './database.service';
import { MedicRepository } from '../../app/use-cases/repositories/medic-repository';

@Module({
  imports: [ExpertiseModule, MedicInfosModule, MedicWorkModule],
  providers: [
    ...databaseProvider,
    {
      provide: MedicRepository,
      useClass: SequelizeMedicRepository,
    },
  ],
  exports: [...databaseProvider, MedicRepository],
})
export class DatabaseModule {}
