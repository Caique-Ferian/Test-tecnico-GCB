// import { Test, TestingModule } from '@nestjs/testing';
// import { INestApplication } from '@nestjs/common';
// import * as request from 'supertest';
// import { AppModule } from './../src/app.module';
// import { FindWorkByInfos } from '../src/app/use-cases/find-medic-by-work-infos';
// import { makeMedic } from './factories/make-medic';

// describe('Test /GET by work info', () => {
//   let app: INestApplication;
//   const medic = makeMedic();
//   const findWorkByInfos = {
//     execute: () => ({
//       medics: [medic],
//     }),
//   };

//   beforeEach(async () => {
//     const moduleFixture: TestingModule = await Test.createTestingModule({
//       imports: [AppModule],
//     })

//       .overrideProvider(FindWorkByInfos)
//       .useValue(findWorkByInfos)
//       .compile();

//     app = moduleFixture.createNestApplication();
//     await app.init();
//   });

//   it('should be able to list medics by address', () => {
//     return request(app.getHttpServer())
//       .get('/medics/medic-work/address/rua_teste')
//       .expect(200)
//       .expect((response: request.Response) => {
//         const { medics } = response.body;
//         expect(medics).toHaveLength(1);
//         expect(medics[0].address).toEqual(medic.workInfo.address);
//       });
//   });

//   afterAll(async () => {
//     await app.close();
//   });
// });
