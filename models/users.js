module.exports = function (sequelize, DataTypes) {

  var Users = sequelize.define('users', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstname: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    lastname: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    }

  });

  return Users;

}