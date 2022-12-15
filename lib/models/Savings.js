const pool = require('../utils/pool');

module.exports = class Savings {
  savings_id;
  savings_goal;

  constructor({ savings_id, savings_goal }) {
    this.savingsId = savings_id;
    this.savingsGoal = savings_goal;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from savings');
    return rows.map((row) => new Savings(row));
  }

  static async insert(savings) {
    const { rows } = await pool.query(
      `
      INSERT INTO savings (savings_goal)
      VALUES ($1)
      RETURNING *
      `,
      [savings.savingsGoal]
    );
    return new Savings(rows[0]);
  }
};
