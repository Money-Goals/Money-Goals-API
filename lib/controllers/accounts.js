const { Router } = require('express');
const authenticate = require('../middleware/authenticate');

module.exports = Router().get('/', authenticate, async (req, res, next) => {
  try {
    const accounts = [{ monthly_income: 5000, monthly_expenses: 3500 }];
    res.json(accounts);
  } catch (e) {
    next(e);
  }
});
