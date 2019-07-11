module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
      userID: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
          unique: true
      },
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
      userTypeID: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });

//     var Barber = sequelize.define(`barber`, {

//     });

// USE `barbershop`;
// CREATE  OR REPLACE VIEW `barber` AS
// SELECT u.userID AS barberID, u.userName, u.firstName, u.lastName, ut.userType
// FROM users u, userType ut 
// WHERE u.userTypeID = ut.userTypeID
// AND ut.userType = 'barber';
    return Users;
 };

        