module.exports = function(sequelize, DataTypes) {
    var Services = sequelize.define("Services", {
     
      serviceName: {
          type: DataTypes.STRING, 
        allowNull: false,
      }
    });

    // Services.belongsTo(BarberServices);
    
    return Services;
 };






