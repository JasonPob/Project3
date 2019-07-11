module.exports = function(sequelize, DataTypes) {
    var Barber = sequelize.define("Barber", {
     
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
      password: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });


    return Barber;
 };

        