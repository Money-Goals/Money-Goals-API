-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS accounts;
DROP TABLE IF EXISTS cc;
DROP TABLE IF EXISTS investments;


CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  password_hash VARCHAR NOT NULL
);

CREATE TABLE accounts (
  account_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  monthly_income INTEGER NOT NULL,
  housing INTEGER NOT NULL,
  transportation INTEGER NOT NULL,
  groceries INTEGER NOT NULL,
  insurance INTEGER NOT NULL,
  healthcare INTEGER NOT NULL,
  utilities INTEGER NOT NULL,
  miscellaneous INTEGER NOT NULL,
  savings INTEGER NOT NULL,
  user_id BIGINT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE cc (
  cc_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  cc_balance INTEGER NOT NULL,
  interest INTEGER NOT NULL,
  monthly_payment INTEGER NOT NULL,
  months_until_payoff INTEGER NOT NULL,
  user_id BIGINT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE investments (
  investments_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  age INTEGER NOT NULL,
  retirement_age INTEGER NOT NULL,
  retirement_account_balance INTEGER NOT NULL,
  user_id BIGINT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
