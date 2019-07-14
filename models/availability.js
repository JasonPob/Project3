module.exports = function (sequelize, DataTypes) {
    var Availability = sequelize.define("Availability", {


        barberID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        startHour: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        startHour: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        endHour: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dayOfWeek: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
Availability.hasMany(Barber);

    return Availability;
};



