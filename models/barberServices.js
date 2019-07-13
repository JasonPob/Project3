module.exports = function(sequelize, DataTypes) {
    var BarberServices = sequelize.define("BarberServices", {
     
      serviceID: {
          type: DataTypes.INTEGER, 
        allowNull: false,
      },
      barberID: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      price: {
          type: DataTypes.FLOAT,
          allowNull: false
      }
    });


    return BarberServices;
 };

