'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MedicInfos', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      crm: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      cellphone: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      workInfo: {
        type: Sequelize.INTEGER,
        field: 'work_info',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'MedicWorks',
          key: 'id',
        },
      },
      expertise: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('MedicInfos');
  },
};
