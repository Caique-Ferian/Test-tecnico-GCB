import { Module } from '@nestjs/common';
import { expertiseProvider } from './expertise.provider';
import { ExpertiseService } from './expertise.service';

@Module({
  providers: [ExpertiseService, ...expertiseProvider],
  exports: [...expertiseProvider, ExpertiseService],
})
export class ExpertiseModule {}
