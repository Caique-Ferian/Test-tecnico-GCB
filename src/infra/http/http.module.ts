import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { MedicController } from './controllers/medic.controller';
import { CreateMedic } from '../../app/use-cases/create-medic';
import { FindByInfos } from '../../app/use-cases/find-medic-by-infos';
import { FindWorkByInfos } from '../../app/use-cases/find-medic-by-work-infos';
import { UpdateMedicInfo } from '../../app/use-cases/update-medic-info';
import { UpdateMedicWorkInfo } from '../../app/use-cases/update-medic-workInfo';
import { HideMedic } from '../../app/use-cases/hide-medic';

@Module({
  imports: [DatabaseModule],
  controllers: [MedicController],
  providers: [
    CreateMedic,
    FindByInfos,
    FindWorkByInfos,
    UpdateMedicInfo,
    UpdateMedicWorkInfo,
    HideMedic,
  ],
})
export class HttpModule {}
