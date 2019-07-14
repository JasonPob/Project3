<<<<<<< HEAD
module.exports = function (sequelize, DataTypes) {
    var Appointment = sequelize.define("Appointment", {

        appointmentID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        barberID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        clientID: {
            type: DataTypes.INTEGER,
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
        apptTotal: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        apptState: {
            type: DataTypes.STRING
        }

    });

    Appointment.belongsTo(Client);
    Appointment.belongsTo(Barber);

    return Appointment;
};
=======
<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
    var Appointment = sequelize.define("Appointment", {
    
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

    return Appointment;
};
=======
// module.exports = function(sequelize, DataTypes) {
//     var Appointment = sequelize.define("Appointment", {
    
//       barberID: {
//           type: DataTypes.INTEGER,
//           allowNull: false
//       },
//       clientID: {
//           tpye: DataTypes.INTEGER,
//           allowNull: false
//       },
//       dateOfAppointment: {
//           type: DataTypes.DATE,
//           allowNull: false
//       },
//       apptCreated: {
//           type: DataTypes.DATE,
//           allowNull: false
//       },
//       apptPrice: {
//           type: DataTypes.FLOAT,
//           allowNull: true
//       },
//       apptTip: {
//           type: DataTypes.FLOAT,
//           allowNull: true
//       },
//       apptTotal:{
//           type: DataTypes.FLOAT,
//           allowNull: true
//       },
//       apptState:{
//           type:DataTypes.STRING
//       }

//     });

//     return Appointment;
// };
>>>>>>> 61b425928422329f70f92278babed26736dbf706
>>>>>>> bb3cc5fb44fb5b8c3ec772c486e6594d6ff5b0a0






