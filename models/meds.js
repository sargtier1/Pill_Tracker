module.exports = function (sequelize, DataTypes) {

  // deleted 1 object and changed 1 name

    var Meds = sequelize.define('medications', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      drugName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      startTime: {
        type: DataTypes.STRING,
        allowNull: false
      },
      frequency: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      notes: {
          type: DataTypes.STRING
      }
  
    });
  
    return Meds;
  
  }