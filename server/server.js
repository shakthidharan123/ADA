const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User= require('./Schema'); 

dotenv.config();
const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/accident", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   role: String, // 'admin' or 'user'
// });



// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access Denied" });
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

// Admin Login
app.post("/admin/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await User.findOne({ username, role: "admin" });
  if (!admin) return res.status(400).json({ message: "Admin not found" });

  const validPass = await bcrypt.compare(password, admin.password);
  if (!validPass) return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ _id: admin._id, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// User Login
app.post("/user/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, role: "user" });
  if (!user) return res.status(400).json({ message: "User not found" });

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ _id: user._id, role: "user" }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Admin adds a user
app.post("/admin/add-user", verifyToken, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ message: "Unauthorized" });

  const { username, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({ username, password: hashedPassword, role: "user" });
  await newUser.save();
  res.json({ message: "User added successfully" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
