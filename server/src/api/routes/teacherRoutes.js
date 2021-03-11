const express = require('express')
const router = express.Router()

const teacherController = require('../controllers/teacherController')

router.get('/', teacherController.getTeachers)
router.post('/', teacherController.addTeachers)
router.delete('/', teacherController.removeTeachers)
router.patch('/', teacherController.updateTeachers)

module.exports = router
