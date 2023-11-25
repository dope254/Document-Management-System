module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define(
    'Event', 
    {
      sectorId: {
        type: DataTypes.INTEGER,
        allowNull: false, // Modify this as per your requirements
      },
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
      eventDate: {
        type: DataTypes.DATE,
        allowNull: false
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
        },
      },
    });
  
    Event.associate = (models) => {
      Event.belongsTo(models.Sectors, {
        foreignKey: 'sectorId',
        onDelete: 'CASCADE'
      }); // Event belongs to a Sector
    };
  
    return Event;
  };
  