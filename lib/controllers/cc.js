const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const CC = require('../models/CC');

module.exports = Router()
  .post('/', authenticate, async (req, res, next) => {
    try {
      const cc = await CC.insert(req.body);
      res.json(cc);
    } catch (e) {
      next(e);
    }
  });
