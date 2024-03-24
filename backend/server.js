import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import conn from "./utills/db.js";

const port = 5000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

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
                // User found, sign-in successful
                res.status(200).json(result[0]); // Return user data
            }
        }
    });
});

app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
});  