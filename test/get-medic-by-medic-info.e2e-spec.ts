// import { Test, TestingModule } from '@nestjs/testing';
// import { INestApplication } from '@nestjs/common';
// import * as request from 'supertest';
// import { AppModule } from './../src/app.module';
// import { FindByInfos } from '../src/app/use-cases/find-medic-by-infos';
// import { makeMedic } from './factories/make-medic';

// describe('Test /GET by medic info', () => {
//   let app: INestApplication;
//   const medic = makeMedic();
//   const findByInfos = {
//     execute: () => ({
//       medic: [medic],
//     }),
//   };

//   beforeEach(async () => {
//     const moduleFixture: TestingModule = await Test.createTestingModule({
//       imports: [AppModule],
//     })
//       .overrideProvider(FindByInfos)
//       .useValue(findByInfos)
//       .compile();

//     app = moduleFixture.createNestApplication();
//     await app.init();
//   });

//   it('should be able to list medics by expertise', () => {
//     return request(app.getHttpServer())
//       .get('/medics/medic-info/expertise/cardiologista')
//       .expect(200)
//       .expect((response: request.Response) => {
//         const { medics } = response.body;
//         expect(medics).toHaveLength(1);
//         expect(medics[0].name).toEqual(medic.name.value);
//       });
//   });

//   afterAll(async () => {
//     await app.close();
//   });
// });
