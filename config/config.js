module.exports = 

{
  "development": {
    "username": "root",
<<<<<<< HEAD:config/config.json
    "password": "jap0bzfig0",
=======
    "password": process.env.PASSWORD,
>>>>>>> bb3cc5fb44fb5b8c3ec772c486e6594d6ff5b0a0:config/config.js
    "database": "barbershop",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.PASSWORD,
    "database": "barbershop",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.PASSWORD,
    "database": "barbershop",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  }
}
