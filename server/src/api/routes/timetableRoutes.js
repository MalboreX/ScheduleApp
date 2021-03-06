const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

const timetableController = require('../controllers/timetableController')

router.get('/:date', timetableController.getTimetables)
router.get('/', timetableController.getTimetables)

router.post('/', timetableController.addTimetables)
router.delete('/', timetableController.removeTimetables)
router.patch('/', timetableController.updateTimetables)

module.exports = router
