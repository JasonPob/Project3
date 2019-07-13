module.exports = function(sequelize, DataTypes) {
    var Services = sequelize.define("Services", {
     
      serviceName: {
          type: DataTypes.STRING, 
        allowNull: false,
      }
    });
    return Services;
 };






