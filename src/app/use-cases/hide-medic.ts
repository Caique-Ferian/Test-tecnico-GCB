import { Injectable } from '@nestjs/common';
import { MedicRepository } from './repositories/medic-repository';
import { MedicNotFound } from './errors/medicNotFound';

interface HideMedicRequest {
  id: string;
}

@Injectable()
export class HideMedic {
  constructor(private medicRepository: MedicRepository) {}

  public async execute(request: HideMedicRequest): Promise<void> {
    const { id } = request;
    const medic = await this.medicRepository.findByMedicInfo('id', id);
    if (!medic.length) throw new MedicNotFound();
    medic[0].hideMedic();
    await this.medicRepository.save(medic[0]);
  }
}
