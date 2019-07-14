require("dotenv").config();
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("./config/passport");

const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;



// Requiring our models for syncing
var db = require("./models");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: false })); //For body parser
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routes/api-routes.js")(app);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// const syncOptions = { force: true };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = false;
}

app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
 db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });


// Routes
// =============================================================
//require("./routes/post-api-routes.js")(app);
//require("./routes/author-api-routes.js")(app);
//require("./routes/html-routes.js")(app);

