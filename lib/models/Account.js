const pool = require('../utils/pool');

module.exports = class Account {
  account_id;
  monthly_income;
  housing;
  transportation;
  groceries;
  insurance;
  healthcare;
  utilities;
  miscellaneous;
  savings;

  constructor({
    account_id,
    monthly_income,
    housing,
    transportation,
    groceries,
    insurance,
    healthcare,
    utilities,
    miscellaneous,
    savings,
  }) {
    this.accountId = account_id;
    this.monthlyIncome = monthly_income;
    this.housing = housing;
    this.transportation = transportation;
    this.groceries = groceries;
    this.insurance = insurance;
    this.healthcare = healthcare;
    this.utilities = utilities;
    this.miscellaneous = miscellaneous;
    this.savings = savings;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from accounts');
    return rows.map((row) => new Account(row));
  }

  static async insert(account) {
    const { rows } = await pool.query(
      `
      INSERT INTO accounts (monthly_income, housing, transportation, groceries, insurance, healthcare, utilities, miscellaneous, savings)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *
      `,
      [
        account.monthlyIncome,
        account.housing,
        account.transportation,
        account.groceries,
        account.insurance,
        account.healthcare,
        account.utilities,
        account.miscellaneous,
        account.savings,
      ]
    );
    return new Account(rows[0]);
  }
};
