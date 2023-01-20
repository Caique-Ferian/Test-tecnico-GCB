import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CreateMedic } from '../src/app/use-cases/create-medic';
import { AppModule } from './../src/app.module';
import { makeMedic } from './factories/make-medic';
describe('Test /POST', () => {
  let app: INestApplication;
  const medic = makeMedic();
  const mockedMedic = {
    name: medic.name.value,
    crm: medic.crm.value,
    cep: '13970346',
    landline: medic.workInfo.landline,
    cellphone: medic.cellphone,
    expertise: medic.expertise.value,
  };
  const createMedic = {
    execute: () => ({
      medic: medic,
    }),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })

      .overrideProvider(CreateMedic)
      .useValue(createMedic)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should be able to create a  medic', () => {
    return request(app.getHttpServer())
      .post('/medics')
      .send(mockedMedic)
      .expect(201)
      .expect((response: request.Response) => {
        const newMedic = response.body;
        expect(newMedic.medic.name).toEqual(medic.name.value);
        expect(newMedic.medic.id).toBeDefined();
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
