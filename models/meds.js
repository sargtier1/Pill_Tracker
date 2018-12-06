module.exports = function (sequelize, DataTypes) {

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
      startDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      length: {
        type: DataTypes.INTEGER
      },
      frequency: {
          type: DataTypes.INTEGER
      },
      notes: {
          type: DataTypes.STRING
      }
  
    });
  
    return Meds;
  
  }