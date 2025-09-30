const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const algoRoutes = require("./routes/algoRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/algos", algoRoutes);
app.use("/api/auth", authRoutes);

// Connect DB and start server
mongoose.connect("mongodb://127.0.0.1:27017/dsalgoexplorer")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on http://localhost:5000"));
  })
  .catch(err => console.log(err));