var db = require("../models");
var passport = require("../passport");
var multer = require("multer");
var upload = multer({ dest: "./public/uploads/" });

module.exports = function (app) {
    // Get all examples
    app.get("/api/examples", function (req, res) {
        db.Example.findAll({}).then(function (dbExamples) {
            res.json(dbExamples);
        });
    });

    // Create a new example
    app.post("/api/examples", function (req, res) {
        db.Example.create(req.body).then(function (dbExample) {
            res.json(dbExample);
        });
    });

    // Delete an example by id
    app.delete("/api/examples/:id", function (req, res) {
        db.Example.destroy({ where: { id: req.params.id } }).then(function (
            dbExample
        ) {
            res.json(dbExample);
        });
    });

    // Login
    app.post("/api/login", passport.authenticate("local"), function (
        req,
        res
    ) {
        res.json("/customer");
    });

    app.post("/api/signup", function (req, res) {
        console.log("api log", req.body);
        db.User.create({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            addressOne: req.body.addressOne,
            addressTwo: req.body.addressTwo,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode
        })
            .then(function () {
                res.redirect(307, "/api/login");
            })
            .catch(function (err) {
                console.log(err);
                res.json(err);
            });
    });

    // Route for logging user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id,
                firstName: req.user.firstName
            });
        }
    });
}
