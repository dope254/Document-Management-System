'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Events', {
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
      eventDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      access: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'public',
        validate: {
          isIn: [['IT', 'Human Resource', 'Procurement', 'Public Works', 'Transport', 'Governance']],
        },
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      sectorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sectors',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Events');
  },
};
