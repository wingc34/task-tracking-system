const express = require('express')

const TaskCtrl = require('../controllers/task')

const router = express.Router()

router.get('/tasks', TaskCtrl.getTasks)
router.post('/tasks', TaskCtrl.getTasksByName)

module.exports = router