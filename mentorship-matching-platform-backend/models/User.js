const db = require('../config/db');

class User {
  static create({ username, email, password, role }, callback) {
    const sql = 'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)';
    db.query(sql, [username, email, password, role], callback);
  }

  static findByEmail(email, callback) {
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], callback);
  }

  static findById(id, callback) {
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], callback);
  }
}

module.exports = User;
