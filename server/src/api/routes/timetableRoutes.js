const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

const timetableController = require('../controllers/timetableController')

router.get('/', timetableController.getTimetables)

module.exports = router
