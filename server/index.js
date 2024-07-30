// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '#Alfred2504',
  database: 'amaktech_transaction_tracker',
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to AmakTech Transaction Tracker API');
});

// Create a new user (registration)
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.execute(query, [name, email, password], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send({ id: results.insertId, name, email });
  });
});

// User login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.execute(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length > 0) {
      res.status(200).send(results[0]);
    } else {
      res.status(401).send({ message: 'Invalid credentials' });
    }
  });
});

// Create a new transaction
app.post('/transactions', (req, res) => {
  const { user_id, type, amount, description } = req.body;
  const query = 'INSERT INTO transactions (user_id, type, amount, description) VALUES (?, ?, ?, ?)';
  db.execute(query, [user_id, type, amount, description], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send({ id: results.insertId, user_id, type, amount, description });
  });
});

// Get all transactions
app.get('/transactions', (req, res) => {
  const query = 'SELECT * FROM transactions';
  db.execute(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
