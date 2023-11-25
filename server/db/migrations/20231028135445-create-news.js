'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('News', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      newsDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
      },
      access: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'public',
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      sectorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sectors', // Assuming the name of the sector table is 'Sectors'
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: true, // Modify this as per your requirements
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('News');
  },
};
