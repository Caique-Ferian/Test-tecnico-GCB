'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(queryInterface.createTable('MedicWorks', {
              id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
              },
              landline: {
                type: Sequelize.DOUBLE,
                allowNull: false
              },
              address: {
                type: Sequelize.STRING,
                allowNull: false
              },
              district: {
                type: Sequelize.STRING,
                allowNull: false
              },
              city: {
                type: Sequelize.STRING,
                allowNull: false
              },
              uf: {
                type: Sequelize.STRING,
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
            return regeneratorRuntime.awrap(queryInterface.dropTable('MedicWork'));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};