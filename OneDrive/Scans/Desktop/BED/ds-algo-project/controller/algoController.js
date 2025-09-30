const Algo = require("../model/Algo");

// Get all algos for logged-in user
const getAlgos = async (req, res) => {
  const algos = await Algo.find({ user: req.user._id });
  res.json(algos);
};

// Add algo
const addAlgo = async (req, res) => {
  const { name, category, description } = req.body;
  const algo = new Algo({ name, category, description, user: req.user._id });
  await algo.save();
  res.status(201).json(algo);
};

// Delete algo
const deleteAlgo = async (req, res) => {
  const { id } = req.params;
  const deleted = await Algo.findOneAndDelete({ _id: id, user: req.user._id });
  if (!deleted) return res.status(404).json({ message: "Algo not found" });
  res.json({ message: "Algo deleted successfully" });
};

// Update algo
const updateAlgo = async (req, res) => {
  const { id } = req.params;
  const { name, category, description } = req.body;

  const updated = await Algo.findOneAndUpdate(
    { _id: id, user: req.user._id },
    { name, category, description },
    { new: true }
  );

  if (!updated) return res.status(404).json({ message: "Algo not found" });
  res.json(updated);
};

module.exports = { getAlgos, addAlgo, deleteAlgo, updateAlgo };