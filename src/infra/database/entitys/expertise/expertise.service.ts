import { Inject, Injectable } from '@nestjs/common';
import { EXPERTISE_REPOSITORY } from '../../database.constants';
import { Expertise } from './expertise.entity';
import { Op } from 'sequelize';

@Injectable()
export class ExpertiseService {
  constructor(
    @Inject(EXPERTISE_REPOSITORY) private expertiseRepository: typeof Expertise,
  ) {}

  async findByExpertise(expertises: string[]): Promise<number[]> {
    const ids = await Promise.all(
      expertises.map(
        async (expertise) =>
          (
            await this.expertiseRepository.findOne({
              where: { expertise: { [Op.like]: `%${expertise}%` } },
            })
          ).id,
      ),
    );
    return ids;
  }
  async findById(ids: string[]): Promise<string[]> {
    const expertises = await Promise.all(
      ids.map(
        async (id) =>
          (
            await this.expertiseRepository.findOne({ where: { id: +id } })
          ).expertise,
      ),
    );
    return expertises;
  }
}
