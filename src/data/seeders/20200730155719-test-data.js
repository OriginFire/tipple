

const db = require( './Vendors.js');


module.exports =  {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("Vendor", db);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
