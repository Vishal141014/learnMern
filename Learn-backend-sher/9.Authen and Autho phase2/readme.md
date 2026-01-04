create user account
-- setup mongoose
-- schema
-- model setup
-- usercreate -> passwrod -> hash
-- jwt token create -> cookie set on frontend

Login
-- login -> token -> decrypt -> email


🔐 User Authentication System (Express + MongoDB)

This project implements User Registration and Login using Node.js, Express, MongoDB (Mongoose), bcrypt for password hashing, JWT for authentication, and cookies for session handling.

📦 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

bcrypt

jsonwebtoken (JWT)

cookie-parser

EJS (View Engine)

📥 Installation
npm install express mongoose bcrypt jsonwebtoken cookie-parser ejs

⚙️ Basic Express Setup
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

🗄️ MongoDB & Mongoose Setup
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/authDB")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

📄 User Schema
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);

📝 User Registration (Create Account)
Steps:

Receive user data

Hash password using bcrypt

Save user to database

Create JWT token

Store token in cookie

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/User");

app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });

    const token = jwt.sign(
        { id: user._id, email: user.email },
        "secretkey",
        { expiresIn: "1d" }
    );

    res.cookie("token", token, { httpOnly: true });
    res.send("User registered successfully");
});

🔑 Login User
Steps:

Find user by email

Compare password using bcrypt

Generate JWT token

Store token in cookie

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid credentials");

    const token = jwt.sign(
        { id: user._id, email: user.email },
        "secretkey",
        { expiresIn: "1d" }
    );

    res.cookie("token", token, { httpOnly: true });
    res.send("Login successful");
});

🔐 JWT Authentication Middleware
Token Decryption & Email Extraction
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).send("Unauthorized");

    const decoded = jwt.verify(token, "secretkey");
    req.userEmail = decoded.email;
    next();
};

👤 Protected Route Example
app.get("/profile", authMiddleware, (req, res) => {
    res.send(`Welcome ${req.userEmail}`);
});

🍪 Cookie Usage

JWT is stored in HTTP-only cookies

Prevents access via frontend JavaScript

Improves security against XSS attacks

✅ Key Points

Passwords are hashed before storing

JWT handles authentication securely

Cookies maintain user session

Email is extracted by decrypting JWT token

Protected routes require authentication

🚀 Future Improvements

Logout functionality

Refresh tokens

Role-based authorization

Better error handling

Environment variables for secrets

✅ Authentication system successfully implemented