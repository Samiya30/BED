const mongoose = require("mongoose");

const algoSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model("Algo", algoSchema);