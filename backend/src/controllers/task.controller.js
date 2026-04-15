const asyncHandler = require('../utils/asyncHandler');
const taskService = require('../services/task.service');

const createTask = asyncHandler(async (req, res) => {
  const task = await taskService.createTask(req.body, req.user._id);

  res.status(201).json({
    success: true,
    data: task
  });
});

const getTasks = asyncHandler(async (req, res) => {
  const tasks = await taskService.getTasks(req.user);

  res.status(200).json({
    success: true,
    data: tasks
  });
});

const getTask = asyncHandler(async (req, res) => {
  const task = await taskService.getTaskById(req.params.id, req.user);

  res.status(200).json({
    success: true,
    data: task
  });
});

const updateTask = asyncHandler(async (req, res) => {
  const task = await taskService.updateTask(req.params.id, req.body, req.user);

  res.status(200).json({
    success: true,
    data: task
  });
});

const deleteTask = asyncHandler(async (req, res) => {
  await taskService.deleteTask(req.params.id, req.user);

  res.status(200).json({
    success: true,
    message: 'Task deleted'
  });
});

module.exports = {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask
};