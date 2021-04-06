const express = require("express");
const router = express.Router();
const task = require("../models/task.model");
const m = require("../helpers/middlewares");
// Routes
/* All tasks */
router.get("/", async (req, res) => {
  await task
    .getTasks()
    .then((tasks) => res.json(tasks))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});
/* Generate Radomly a new task */
router.get("/random-task-generator", async (req, res) => {
  await task
    .generateTask()
    .then((task) =>
      res.status(201).json({
        message: `The task #${task.id} has been created`,
        content: task,
      })
    )
    .catch((err) => res.status(500).json({ message: err.message }));
});

module.exports = router;
