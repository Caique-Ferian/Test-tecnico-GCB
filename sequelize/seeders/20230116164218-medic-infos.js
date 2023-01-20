'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('MedicInfos', [
      {
        id: '00150416-6d77-4912-8e4f-118f49c70970',
        name: 'Caique Ferian',
        crm: 1234567,
        cellphone: 19991234567,
        work_info: 2,
        expertise: '1;2',
        active: true,
      },
      {
        id: '2e915013-5ba5-4cfe-9b40-b98f8c814af4',
        name: 'Ricardo da Silva',
        crm: 9876543,
        cellphone: 19998765432,
        work_info: 1,
        expertise: '3;4',
        active: true,
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('MedicInfos', null, {});
  },
};
