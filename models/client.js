<<<<<<< HEAD
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
=======
// module.exports = function(sequelize, DataTypes) {
//     var Client = sequelize.define("Client", {
     
//       userName: {
//           type: DataTypes.STRING, 
//         allowNull: false,
//         unique: true
//       },
//       firstName: {
//           type: DataTypes.STRING,
//           allowNull: false
//       },
//       lastName: {
//           type: DataTypes.STRING,
//           allowNull: false
//       },
//       password: {
//           type: DataTypes.STRING,
//           allowNull: false
//       }
//     });


//     return Client;
//  };
>>>>>>> 61b425928422329f70f92278babed26736dbf706
