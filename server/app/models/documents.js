module.exports = (sequelize, DataTypes) => {
  const Documents = sequelize.define(
    "Documents",
    {
      ownerId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "This field cannot be empty",
          },
        },
      },
      ownerRoleId: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "This field cannot be empty",
          },
        },
      },
      // file: {
      //   type: DataTypes.STRING, // Or appropriate type for file details
      //   allowNull: true,
      // },

      access: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "public",
        validate: {
          notEmpty: {
            msg: "This field cannot be empty",
          },
          isIn: {
            args: [["public", "private", "role"]],
            msg: "public, private or role required",
          },
        },
      },
      complete: DataTypes.BOOLEAN,
    },
    {
      classMethods: {
        associate: (models) => {
          Documents.belongsTo(models.Users, {
            foreignKey: "ownerId",
            onDelete: "CASCADE",
          });
          Documents.belongsToMany(models.Users, {
            // New association to Users for specific sharing
            through: "DocumentShares",
            foreignKey: "documentId", // Foreign key in DocumentShares referencing Documents
            otherKey: "userId", // Foreign key in DocumentShares referencing Users
            onDelete: "CASCADE",
          });
        },
      },
    },
  );
  return Documents;
};
