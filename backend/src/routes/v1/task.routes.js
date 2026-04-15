const express = require('express');
const router = express.Router();

const taskController = require('../../controllers/task.controller');
const protect = require('../../middleware/auth.middleware');
const authorize = require('../../middleware/role.middleware');
const validate = require('../../middleware/validate.middleware');

const {
  createTaskSchema,
  updateTaskSchema
} = require('../../validations/task.validation');

router.use(protect);

router.post('/', validate(createTaskSchema), taskController.createTask);

router.get('/', taskController.getTasks);

router.get('/:id', taskController.getTask);

router.put('/:id', validate(updateTaskSchema), taskController.updateTask);

router.delete('/:id', taskController.deleteTask);

module.exports = router;

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 */
/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create task
 *     tags: [Tasks]
 */
/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update task
 *     tags: [Tasks]
 */
/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete task
 *     tags: [Tasks]
 */