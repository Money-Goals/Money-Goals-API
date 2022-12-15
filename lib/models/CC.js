const pool = require('../utils/pool');

module.exports = class CC {
  cc_id;
  cc_balance;
  interest;
  monthly_payment;
  months_until_payoff;


  constructor({
    cc_id,
    cc_balance,
    interest,
    monthly_payment,
    months_until_payoff,

  }) {
    this.ccId = cc_id;
    this.ccBalance = cc_balance;
    this.interest = interest;
    this.monthlyPayment = monthly_payment;
    this.monthsUntilPayoff = months_until_payoff;

  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from cc');
    return rows.map((row) => new CC(row));
  }

  static async insert(cc) {
    const { rows } = await pool.query(
      `
      INSERT INTO cc (cc_balance, interest, monthly_payment, months_until_payoff)
      VALUES ($1, $2, $3, $4)
      RETURNING *
      `,
      [
        cc.ccBalance,
        cc.interest,
        cc.monthlyPayment,
        cc.monthsUntilPayoff,
      ]
    );
    return new CC(rows[0]);
  }
};
