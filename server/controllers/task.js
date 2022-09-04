const TaskModel = require("../models/task");

const getTasksByName = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a username",
    });
  }
  const reqBody = req.body.Name === "all" ? {} : { By_who: body.Name };

  TaskModel.find(reqBody, (err, task) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!task) {
      return res.status(404).json({ success: false, error: `Task not found` });
    }
    return res.status(200).json({ success: true, data: task });
  }).catch((err) => console.log(err));
};

const getTasks = (req, res) => {
  TaskModel.find({}, (err, tasks) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!tasks.length) {
      return res.status(404).json({ success: false, error: `User not found` });
    }
    return res.status(200).json({ success: true, data: tasks });
  }).catch((err) => console.log(err));
};

module.exports = {
  getTasksByName,
  getTasks,
};
