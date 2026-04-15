const express = require('express');
const router = express.Router();

router.use('/auth', require('./v1/auth.routes'));
router.use('/tasks', require('./v1/task.routes'));

module.exports = router;