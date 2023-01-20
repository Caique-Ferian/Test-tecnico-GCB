import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { UpdateMedicInfo } from '../src/app/use-cases/update-medic-info';
import { MedicNotFound } from '../src/app/use-cases/errors/medicNotFound';

describe('Test /PUT medic info', () => {
  let app: INestApplication;
  let updateMedicInfo = {
    execute: () => console.log('OK'),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })

      .overrideProvider(UpdateMedicInfo)
      .useValue(updateMedicInfo)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should be able to update an existent medic', () => {
    updateMedicInfo = {
      execute: () => {
        throw new MedicNotFound();
      },
    };
    return request(app.getHttpServer()).put('/medics/medic-info/1').expect(200);
  });

  it('should not be able to update an unexistent medic', () => {
    return request(app.getHttpServer()).put('/medics/medic-info/1').expect(500);
  });
  afterAll(async () => {
    await app.close();
  });
});
