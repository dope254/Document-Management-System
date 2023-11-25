'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sectors', [
      {
        title: 'IT Sector',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'HR Sector',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more sectors
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sectors', null, {});
  },
};
