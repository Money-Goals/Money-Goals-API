const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Investment = require('../models/Investment');

module.exports = Router().post('/', authenticate, async (req, res, next) => {
  try {
    const investment = await Investment.insert(req.body);
    res.json(investment);
  } catch (e) {
    next(e);
  }
});
