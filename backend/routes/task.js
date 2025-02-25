const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.post("/add", async (req, res) => {
  const { userId, task } = req.body;
  const newTask = new Task({ userId, task });
  await newTask.save();
  res.json(newTask);
});

router.get("/:userId", async (req, res) => {
  const tasks = await Task.find({ userId: req.params.userId });
  res.json(tasks);
});

module.exports = router;
