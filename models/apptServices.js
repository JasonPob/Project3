module.exports = function(sequelize, DataTypes) {
    var ApptServices = sequelize.define("ApptServices", {
     
      barberServiceID: {
          type: DataTypes.INTEGER, 
        allowNull: false,
      },
      appointmentID: {
          type: DataTypes.INTEGER,
          allowNull: false
      }
    });

ApptServices.hasOne(BarberServices);

    return ApptServices;
 };





  