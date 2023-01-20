'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('MedicWorks', [
      {
        landline: 1148691234,
        address: 'Avenida São Paulo, 154',
        district: 'Jardim Armenia',
        city: 'Mogi das Cruzes',
        uf: 'SP',
      },
      {
        landline: 1148691234,
        address: 'Rua Manoel Pereira, 220',
        district: 'Santo Antônio',
        city: 'Itapira',
        uf: 'SP',
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('MedicWorks', null, {});
  },
};
