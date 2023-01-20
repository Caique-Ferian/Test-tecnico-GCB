import { Module } from '@nestjs/common';
import { medicInfosProvider } from './medicInfos.provider';
import { MedicInfosService } from './medicInfos.service';

@Module({
  providers: [MedicInfosService, ...medicInfosProvider],
  exports: [...medicInfosProvider, MedicInfosService],
})
export class MedicInfosModule {}
