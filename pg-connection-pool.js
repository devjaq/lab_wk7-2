"use strict";

const pg = require("pg");
const pool = new pg.Pool({
  user: 'postgres',
  password: 'pass',
  host: 'localhost',
  port: 1337,
  database: 'expressshopdb',
  ssl: false
});

module.exports = pool;