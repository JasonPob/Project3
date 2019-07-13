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

    return Appointment;
};






