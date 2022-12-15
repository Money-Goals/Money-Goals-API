const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Savings = require('../models/Savings');

module.exports = Router()
  .post('/', authenticate, async (req, res, next) => {
    try {
      const savings = await Savings.insert(req.body);
      res.json(savings);
    } catch (err) {
      next(err);
    }
  });
