const db = require("../models");

module.exports = {
    findAllBarbers: function(req, res) {
      db.Barber
        .find(req.query)
        .then(dbBarber => res.json(dbBarber))
        .catch(err => res.status(422).json(err));
    },

    createBarber: function(req, res) {
      db.Barber
        .create(req.body)
        .then(dbBarber => res.json(dbBarber))
        .catch(err => res.status(422).json(err));
    },
    updateBarber: function(req, res) {
      db.Barber.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(dbBarber => res.json(dbBarber))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Barber.findById(req.params.id)
        .then(dbBarber => dbBarber.remove())
        .then(dbBarber => res.json(dbBarber))
        .catch(err => res.status(422).json(err));
    }
};