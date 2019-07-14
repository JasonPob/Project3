module.exports = function(sequelize, DataTypes) {
    var ServiceZIP = sequelize.define("ServiceZIP", {
     
      userID: {
          type: DataTypes.INTEGER, 
        allowNull: false,
      },
      ZIP: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });

    ServiceZIP.belongsTo(Barber);

    return ServiceZIP;
 };

        