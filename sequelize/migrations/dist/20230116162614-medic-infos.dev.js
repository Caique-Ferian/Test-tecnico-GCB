'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(queryInterface.createTable('MedicInfos', {
              id: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false
              },
              name: {
                type: Sequelize.STRING,
                allowNull: false
              },
              crm: {
                type: Sequelize.DOUBLE,
                allowNull: false
              },
              cellphone: {
                type: Sequelize.DOUBLE,
                allowNull: false
              },
              workInfo: {
                type: Sequelize.INTEGER,
                field: 'work_info',
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                references: {
                  model: 'MedicWorks',
                  key: 'id'
                }
              },
              expertise: {
                type: Sequelize.STRING,
                allowNull: false
              },
              active: {
                type: Sequelize.BOOLEAN,
                allowNull: false
              }
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  down: function down(queryInterface, _Sequelize) {
    return regeneratorRuntime.async(function down$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(queryInterface.dropTable('MedicInfos'));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};