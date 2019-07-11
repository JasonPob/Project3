module.exports = function(sequelize, DataTypes) {
    var Appointments = sequelize.define("Appointments", {
      appointmentID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true
      },
      barberID: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      clientID: {
          tpye: DataTypes.INTEGER,
          allowNull: false
      },
      dateOfAppointment: {
          type: DataTypes.DATE,
          allowNull: false
      },
      apptCreated: {
          type: DataTypes.DATE,
          allowNull: false
      },
      apptPrice: {
          type: DataTypes.FLOAT,
          allowNull: true
      },
      apptTip: {
          type: DataTypes.FLOAT,
          allowNull: true
      },
      apptTotal:{
          type: DataTypes.FLOAT,
          allowNull: true
      },
      apptState:{
          type:DataTypes.STRING
      }

    });

    return Appointments;
};






