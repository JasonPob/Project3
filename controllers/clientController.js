const db = require("../models");

module.exports = {
    findAllClients: function(req, res) {
      db.Client
        .findAll(req.query)
        .then(dbClient => res.json(dbClient))
        .catch(err => res.status(422).json(err));
    },

    createBarber: function(req, res) {
        db.Client
        .create(req.body)
        .then(dbClient => res.json(dbClient))
        .catch(err => res.status(422).json(err));
    },
    updateBarber: function(req, res) {
        db.Client.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(dbClient => res.json(dbClient))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Client.findById(req.params.id)
        .then(dbClient => dbClient.remove())
        .then(dbClient => res.json(dbClient))
        .catch(err => res.status(422).json(err));
    }
};