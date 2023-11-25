// Assuming your DocumentShares model already exists, add UserId and DocumentId as foreign keys.
module.exports = (sequelize, DataTypes) => {
  const DocumentShares = sequelize.define("DocumentShares", {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    DocumentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    permissions: {
      type: DataTypes.STRING, // 'read', 'write', 'delete' etc.
      defaultValue: "read",
    },
  });

  return DocumentShares;
};
