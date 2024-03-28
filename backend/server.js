import express from "express";
import jwt  from "jsonwebtoken";
import cors from "cors";
import bodyParser from "body-parser";
import conn from "./utills/db.js";
import crypto from "crypto";

const port = 5005;
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Secret key for JWT token generation
const secretKey = crypto.randomBytes(32).toString('hex');

// Initialize an empty blacklist
let tokenBlacklist = [];

// Logout endpoint
app.post('/logout', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  // Remove the token from the blacklist
  const index = tokenBlacklist.indexOf(token);
  if (index !== -1) {
    tokenBlacklist.splice(index, 1);
  }

  res.status(200).json({ message: 'Logout successful' });
});

// Middleware to authenticate requests using JWT tokens
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  // Check if the token is blacklisted
  if (tokenBlacklist.includes(token)) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }

    // Set decoded token to req.user
    req.user = decoded;
    next();
  });
};

  

app.post('/signup', (req, res) => {
    const { name, email, contact, gender, goal, pass } = req.body;

    const sql = `INSERT INTO register (name, email, contact, gender, goal, pass) VALUES (?, ?, ?, ?, ?, ?)`;
    conn.query(sql, [name, email, contact, gender, goal, pass], (err, result) => {
        if (err) {
            console.log('Registration failed:', err);
            res.status(500).send('Registration failed');
        } else {
            console.log('User registered successfully');
            res.status(200).send('Registered successfully'); // Send success response
        }
    });
});

app.post('/signin', (req, res) => {

    const { email, password } = req.body;

    const sql = `SELECT * FROM register WHERE email = ? AND pass = ?`;
    conn.query(sql, [email, password], (err, result) => {
        if (err) {
            console.log('Error:', err);
            res.status(500).send('An error occurred during sign-in');
        } else {
            if (result.length === 0) {
                // User not found or invalid credentials
                res.status(401).send('Invalid email or password');
            } else {
                // Generate JWT token with user email as payload
                const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
                res.json({Login:true, token, result });
            }
        }
    });
});
// Protected endpoint that requires JWT token for access
app.get("/profile", authenticateJWT, (req, res) => {
    // Retrieve user data from decoded JWT token
    const user = req.user;
    res.json(user);
  });

app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
});  