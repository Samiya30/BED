const User = require("../model/User");
const jwt = require("jsonwebtoken");

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, "secretkey", { expiresIn: "1h" });
};

// Register
const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const userExists = await User.findOne({ username });
  if (userExists) return res.status(400).json({ message: "User already exists" });

  const user = await User.create({ username, password }); // stored as plain text
  res.status(201).json({ _id: user._id, username: user.username, token: generateToken(user._id) });
};

// Login
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (user && user.password === password) { // direct compare
    res.json({ _id: user._id, username: user.username, token: generateToken(user._id) });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

module.exports = { registerUser, loginUser };