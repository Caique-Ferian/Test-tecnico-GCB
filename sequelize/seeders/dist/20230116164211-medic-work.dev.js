'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: function up(queryInterface, _Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(queryInterface.bulkInsert('MedicWorks', [{
              landline: 1148691234,
              address: 'Avenida São Paulo, 154',
              district: 'Jardim Armenia',
              city: 'Mogi das Cruzes',
              uf: 'SP'
            }, {
              landline: 1148691234,
              address: 'Rua Manoel Pereira, 220',
              district: 'Santo Antônio',
              city: 'Itapira',
              uf: 'SP'
            }]));

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
            return regeneratorRuntime.awrap(queryInterface.bulkDelete('MedicWorks', null, {}));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};