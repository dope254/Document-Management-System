module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'This field cannot be empty'
        }
      }
    },
    newsDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING // This assumes the image will be stored as a string (file path or URL)
    },
    sectorId: {
      type: DataTypes.INTEGER,
      allowNull: false, // Modify this as per your requirements
    },
    access: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'public',
      validate: {
        notEmpty: {
          msg: 'This field cannot be empty'
        },
        isIn: {
          args: [['IT', 'Human Resource', 'Procurement', 'Public Works', 'Transport', 'Governance']],
          msg: 'Access must be specific to a sector'
        }
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'This field cannot be empty'
        }
      }
    }
  });

  News.associate = (models) => {
    News.belongsTo(models.Sectors, {
      foreignKey: 'sectorId', // Foreign key in the Users table
      onDelete: 'CASCADE'
    }); // News belongs to a Sector
  };

  return News;
};
