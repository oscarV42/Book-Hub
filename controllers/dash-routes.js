const router = require('express').Router();
const { User } = require('../models');


router.get('/', async (req, res) => {
    try {
      res.render('dashboard', {
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;