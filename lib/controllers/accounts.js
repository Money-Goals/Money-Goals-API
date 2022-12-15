const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Account = require('../models/Account');

module.exports = Router()
  .get('/', authenticate, async (req, res, next) => {
    try {
      const accounts = [{ monthly_income: 5000, monthly_expenses: 3500 }];
      res.json(accounts);
    } catch (e) {
      next(e);
    }
  })
  .post('/', authenticate, async (req, res, next) => {
    try {
      const account = await Account.insert(req.body);
      res.json(account);
    } catch (e) {
      next(e);
    }
  });
