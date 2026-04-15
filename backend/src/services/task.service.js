const Task = require('../models/task.model');
const ApiError = require('../utils/ApiError');

const createTask = async (data, userId) => {
  return await Task.create({ ...data, user: userId });
};

const getTasks = async (user) => {
  if (user.role === 'admin') {
    return await Task.find().populate('user', 'name email');
  }
  return await Task.find({ user: user._id });
};

const getTaskById = async (id, user) => {
  const task = await Task.findById(id);

  if (!task) throw new ApiError(404, 'Task not found');

  if (user.role !== 'admin' && task.user.toString() !== user._id.toString()) {
    throw new ApiError(403, 'Access denied');
  }

  return task;
};

const updateTask = async (id, data, user) => {
  const task = await getTaskById(id, user);

  Object.assign(task, data);
  await task.save();

  return task;
};

const deleteTask = async (id, user) => {
  const task = await getTaskById(id, user);

  await task.deleteOne();
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
};