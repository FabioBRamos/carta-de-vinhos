const sqlite3 = require('sqlite3').verbose();

// create a new database
const db = new sqlite3.Database('vinhos.db');

// define a schema for the users table
db.run(`
  CREATE TABLE IF NOT EXISTS vinhos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    codigo TEXT NOT NULL,
    tipo TEXT NOT NULL UNIQUE,
    nome TEXT NOT NULL,
		garrafa INTEGER NOT NULL,
		teor REAL NOT NULL,
		preco REAL NOT NULL,
		pais TEXT NOT NULL,
		descricao TEXT NOT NULL
  )
`);