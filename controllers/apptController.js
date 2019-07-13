const db = require("../models");

module.exports = {
    findAllAppts: function(req, res) {
        db.Appointment
          .findAll(req.query)
          .then(dbBarber => res.json(dbBarber))
          .catch(err => res.status(422).json(err));
      },
  
      createBarber: function(req, res) {
        db.Appointment
          .create(req.body)
          .then(dbBarber => res.json(dbBarber))
          .catch(err => res.status(422).json(err));
      },
      updateBarber: function(req, res) {
        db.Appointment.findOneAndUpdate({ id: req.params.id }, req.body)
          .then(dbAppointment => res.json(dbAppointment))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.Appointment.findById(req.params.id)
          .then(dbAppointment => dbAppointment.remove())
          .then(dbAppointment => res.json(dbAppointment))
          .catch(err => res.status(422).json(err));
      }


};