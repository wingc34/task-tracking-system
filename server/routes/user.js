const express = require('express')

const UserCtrl = require('../controllers/user')

const router = express.Router()

router.get('/users', UserCtrl.getUsers)
router.get('/usersname', UserCtrl.getUsersName)

module.exports = router