module.exports = function(sequelize, DataTypes) {
    var Client = sequelize.define("Client", {

module.exports = function(sequelize, DataTypes) {
    var Client = sequelize.define("Client", {
     
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
      password: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });


    return Client;
 };
     
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
      password: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });

Client.hasMany(Appointment);

<<<<<<< HEAD
    return Client;
 };
=======
//     return Client;
//  };
>>>>>>> 61b425928422329f70f92278babed26736dbf706
>>>>>>> bb3cc5fb44fb5b8c3ec772c486e6594d6ff5b0a0
