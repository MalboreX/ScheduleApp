const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

const teacherController = require('../controllers/teacherController')


router.get('/', teacherController.getTeachers)

router.use('/', authController.protect)

router.post('/', teacherController.addTeachers)
router.delete('/', teacherController.removeTeachers)
router.patch('/', teacherController.updateTeachers)

module.exports = router
