'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Expertises', [
      {
        expertise: 'Alergologia',
      },
      {
        expertise: 'Angiologia',
      },
      {
        expertise: 'Buco maxilo',
      },
      {
        expertise: 'Cardiologia clínica',
      },
      {
        expertise: 'Cardiologia infantil',
      },
      {
        expertise: 'Cirurgia cabeça e pescoço',
      },
      {
        expertise: 'Cirurgia cardíaca',
      },
      {
        expertise: 'Cirurgia do tórax',
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Expertises', null, {});
  },
};
