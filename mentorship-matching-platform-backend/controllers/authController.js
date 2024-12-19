const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password || !role) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) throw err;

    User.create({ username, email, password: hashedPassword, role }, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ message: 'Email already exists.' });
        }
        throw err;
      }
      res.status(201).json({ message: 'User registered successfully.' });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  User.findByEmail(email, (err, results) => {
    if (err) throw err;

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err;

      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials.' });
      }

      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      res.status(200).json({ token, user: { id: user.id, username: user.username, role: user.role } });
    });
  });
};
    