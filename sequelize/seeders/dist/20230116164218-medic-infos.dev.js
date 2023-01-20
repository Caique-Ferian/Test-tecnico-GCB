'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: function up(queryInterface, _Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(queryInterface.bulkInsert('MedicInfos', [{
              id: '00150416-6d77-4912-8e4f-118f49c70970',
              name: 'Caique Ferian',
              crm: 1234567,
              cellphone: 19991234567,
              work_info: 2,
              expertise: '1;2',
              active: true
            }, {
              id: '2e915013-5ba5-4cfe-9b40-b98f8c814af4',
              name: 'Ricardo da Silva',
              crm: 9876543,
              cellphone: 19998765432,
              work_info: 1,
              expertise: '3;4',
              active: true
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
            return regeneratorRuntime.awrap(queryInterface.bulkDelete('MedicInfos', null, {}));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};