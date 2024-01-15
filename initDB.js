const Database = require('better-sqlite3');
const db = new Database('auth.db');

const createAuthTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    email STRING,
    password STRING
  )
`;

db.exec(createAuthTableQuery);
