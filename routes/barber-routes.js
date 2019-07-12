const router = require("express").Router();
const barbersController = require('../controllers/barbersController');


// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll);


module.exports = router;



// // Requiring our models
// var db = require("../models");

// // Routes
// // =============================================================
// module.exports = function(app) {

// // GET route for getting all of the barbers  
// app.get("/api/barber", function(req, res) {
//     var query = {};
//     //params for fidnign the right barber
//     if (req.query.barber_id) {
//       query.BarberID = req.query.barber_id;
//     }
//     // Here we add an "include" property to our options in our findAll query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Barber
//     db.Barber.findAll({
//       where: query,
//       include: [db.Barber]
//     }).then(function(dbBarber) {
//       res.json(dbBarber);
//     });
//   });



// // POST route for saving a new barber
// app.post("/api/barber", function(req, res) {
//     db.Barber.create(req.body).then(function(dbBarber) {
//       res.json(dbBarber);
//     });
//   });

// // DELETE route for deleting a barber
// app.delete("/api/barber/:id", function(req, res) {
//     db.Barber.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbBarber) {
//       res.json(dbBarber);
//     });
//   });
// };