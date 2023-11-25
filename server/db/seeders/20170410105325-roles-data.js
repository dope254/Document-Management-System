module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Roles', [
      {
        title: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Superuser',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Normal User',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),
  down: queryInterface => queryInterface.bulkDelete('Roles', null, {})
};

