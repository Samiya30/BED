const express = require("express");
const { getAlgos, addAlgo, deleteAlgo, updateAlgo } = require("../controller/algoController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, getAlgos);
router.post("/", protect, addAlgo);
router.delete("/:id", protect, deleteAlgo);
router.put("/:id", protect, updateAlgo);

module.exports = router;