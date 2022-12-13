-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS accounts;

CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR,
  password_hash VARCHAR NOT NULL
);

CREATE TABLE accounts (
  account_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  monthly_income INTEGER NOT NULL,
  housing INTEGER NOT NULL,
  tranportation INTEGER NOT NULL,
  groceries INTEGER NOT NULL,
  insurance INTEGER NOT NULL,
  healthcare INTEGER NOT NULL,
  utilities INTEGER NOT NULL,
  miscellaneous INTEGER NOT NULL,
  savings INTEGER NOT NULL
);

CREATE TABLE tracks (
  tracks_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  cc_balance INTEGER NOT NULL,
  interest INTEGER NOT NULL,
  monthly_payment INTEGER NOT NULL,
  months_until_payoff INTEGER NOT NULL,
);
