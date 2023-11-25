// Migration file for creating DocumentShares table
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DocumentShares', {
      documentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Documents',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
      // Additional attributes if required
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DocumentShares');
  }
};
