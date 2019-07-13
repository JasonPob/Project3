const router = require("express").Router();
const barbersController = require('../controllers/barbersController');
var passport = require("../config/passport");




// Matches with "/api/books"
router.route("/api/barbers")
  .get(barbersController.findAllBarbers)
  .post(barbersController.createBarber);

router.route("/api/login")
  .post(passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.route("/api/signup")
  .post(function (req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      type: req.body.type
    }).then(function () {
      res.redirect(307, "/api/login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
});


// Route for logging user out
router.route("/logout")
  .get(function (req, res) {
  req.logout();
  res.redirect("/");
});

router.route("/api/user_data")
  .get(function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  }
  )





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