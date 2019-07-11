module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
      userID: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
          unique: true
      },
      userName: {
          type: DataTypes.STRING, 
        allowNull: false,
        unique: true
      },
      firstName: {
          type: DataTypes.STRING,
          allowNull: false
      },
      lastName: {
          type: DataTypes.STRING,
          allowNull: false
      },
      userTypeID: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });

    return Users;
};

        