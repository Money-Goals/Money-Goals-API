const pool = require('../utils/pool');

module.exports = class Investment {
  investments_id;
  age;
  retirement_age;
  retirement_account_balance;

  constructor({
    investments_id,
    age,
    retirement_age,
    retirement_account_balance,
  }) {
    this.investmentsId = investments_id;
    this.age = age;
    this.retirementAge = retirement_age;
    this.retirementAccountBalance = retirement_account_balance;

  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from investments');
    return rows.map((row) => new Investment(row));
  }

  static async insert(investment) {
    const { rows } = await pool.query(
      `
      INSERT INTO investments (age, retirement_age, retirement_account_balance)
      VALUES ($1, $2, $3)
      RETURNING *
      `,
      [investment.age, investment.retirementAge, investment.retirementAccountBalance]
    );
    return new Investment(rows[0]);
  }
};
