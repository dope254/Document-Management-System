const bcrypt = require("bcrypt-nodejs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      // Fetch the sector IDs to associate users with specific sectors
      const sectorsQuery = await queryInterface.sequelize.query('SELECT id from Sectors;');
      const sectorRows = sectorsQuery[0];

      // Map the sector IDs to an array
      const sectorIds = sectorRows.map(sector => sector.id);

      // Use the sector IDs to associate users with specific sectors
      return queryInterface.bulkInsert(
        "Users",
        [
          {
            username: "treezy",
            firstName: "Kamau",
            lastName: "Samuel",
            email: "ncc.devops@gmail.com",
            password: bcrypt.hashSync("nccdevops", bcrypt.genSaltSync(8)),
            rolesId: "1",
            active: false,
            sectorId: sectorIds[0], // Associate user with a specific sector
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            username: "test",
            firstName: "tester",
            lastName: "testing",
            email: "test@gmail.com",
            password: bcrypt.hashSync("netbeans", bcrypt.genSaltSync(8)),
            rolesId: "2",
            active: false,
            sectorId: sectorIds[1], // Associate another user with a different sector
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          // Add more users and associate them with specific sectors as needed
        ],
        {}
      );
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },
  down: (queryInterface) => queryInterface.bulkDelete("Users", null, {}),
};
