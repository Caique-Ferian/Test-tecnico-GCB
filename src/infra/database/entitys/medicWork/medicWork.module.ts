import { Module } from '@nestjs/common';
import { medicWorkProvider } from './medicWork.provider';
import { MedicWorkService } from './medicWork.service';

@Module({
  providers: [MedicWorkService, ...medicWorkProvider],
  exports: [MedicWorkService, ...medicWorkProvider],
})
export class MedicWorkModule {}
