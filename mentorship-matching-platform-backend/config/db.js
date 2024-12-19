const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.root,
  password: process.env."Riyas@818",
  database: process.env.mentorship_platform,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  }
  console.log('Connected to the MySQL database.');
});

module.exports = db;
