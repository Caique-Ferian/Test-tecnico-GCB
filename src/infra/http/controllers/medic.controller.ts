import { Body, Controller, Post, Get, Param, Put, Patch } from '@nestjs/common';
import { CreateMedic } from '../../../app/use-cases/create-medic';
import { CreateMedicBody } from '../dtos/create-medic-body';
import { MedicHTTP, MedicViewModule } from '../view-module/medic-view-module';
import { FindByInfos } from '../../../app/use-cases/find-medic-by-infos';
import { FindWorkByInfos } from '../../../app/use-cases/find-medic-by-work-infos';
import { UpdateMedicInfo as UpdateMedicInfo } from '../../../app/use-cases/update-medic-info';
import { UpdateMedicWorkInfo } from '../../../app/use-cases/update-medic-workInfo';
import { HideMedic } from '../../../app/use-cases/hide-medic';
import { request } from '../helper/request';
import { parseString } from 'xml2js';

@Controller('medics')
export class MedicController {
  constructor(
    private createMedic: CreateMedic,
    private findByInfos: FindByInfos,
    private findWorkByInfos: FindWorkByInfos,
    private updateMedicInfo: UpdateMedicInfo,
    private updateMedicWorkInfo: UpdateMedicWorkInfo,
    private hideMedic: HideMedic,
  ) {}

  @Get('/medic-info/:type/:info')
  async getMedicByMedicInfo(
    @Param('type') type: string,
    @Param('info') info: string,
  ): Promise<{ medics: MedicHTTP[] }> {
    const { medic } = await this.findByInfos.execute({ type, info });
    return { medics: medic.map(MedicViewModule.toHTTP) };
  }

  @Get('/medic-work/:type/:info')
  async getMedicByWorkInfo(
    @Param('type') type: string,
    @Param('info') info: string,
  ): Promise<{ medics: MedicHTTP[] }> {
    const { medics } = await this.findWorkByInfos.execute({ type, info });
    return { medics: medics.map(MedicViewModule.toHTTP) };
  }

  @Post()
  async create(@Body() body: CreateMedicBody): Promise<{ medic: MedicHTTP }> {
    const { name, crm, cep, landline, cellphone, expertise } = body;
    const { data } = await request(String(cep));
    let workInfo;
    await parseString(
      data,
      (err, result) =>
        (workInfo =
          result['soap:Envelope']['soap:Body'][0]['ns2:consultaCEPResponse'][0][
            'return'
          ][0]),
    );
    const { medic } = await this.createMedic.execute({
      name,
      crm,
      landline,
      cellphone,
      address: workInfo.end[0],
      district: workInfo.bairro[0],
      city: workInfo.cidade[0],
      uf: workInfo.uf[0],
      expertise,
    });
    return { medic: MedicViewModule.toHTTP(medic) };
  }

  @Put('/medic-info/:id')
  async updateInfo(
    @Param('id') id: string,
    @Body() body: { expertise: string | string[]; cellphone?: number },
  ): Promise<void> {
    await this.updateMedicInfo.execute(id, body);
  }
  @Put('/medic-workaddress/rua_teste/:id')
  async updateWork(
    @Param('id') id: string,
    @Body()
    body: {
      cep: number;
      landline?: number;
    },
  ): Promise<void> {
    const { cep, landline } = body;
    const { data } = await request(String(cep));
    let workInfo;
    await parseString(
      data,
      (err, result) =>
        (workInfo =
          result['soap:Envelope']['soap:Body'][0]['ns2:consultaCEPResponse'][0][
            'return'
          ][0]),
    );
    await this.updateMedicWorkInfo.execute(id, {
      landline,
      address: workInfo.end[0],
      district: workInfo.bairro[0],
      city: workInfo.cidade[0],
      uf: workInfo.uf[0],
    });
  }
  @Patch('/medic-inactive/:id')
  async softDelete(@Param('id') id: string): Promise<void> {
    await this.hideMedic.execute({ id });
  }
}
