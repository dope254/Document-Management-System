module.exports = (sequelize, DataTypes) => {
  const Sectors = sequelize.define('Sectors', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'sector already exist'
      },
      validate: {
        is: {
          args: /\w+/g,
          msg: 'Input a valid title'
        },
        notEmpty: {
          msg: 'This field cannot be empty'
        }
      }
    }
  }, {
    classMethods: {
      associate: (models) => {
        Sectors.hasMany(models.Users, { foreignKey: 'SectorId' });
        Sectors.hasMany(models.Event, { foreignKey: 'SectorId' });
        Sectors.hasMany(models.News, { foreignKey: 'SectorId' });
      }
    }
  });
  return Sectors;
};
