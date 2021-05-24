const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

const disciplineController = require('../controllers/disciplineController')


router.get('/', disciplineController.getDisciplines)

router.use('/', authController.protect)

router.post('/', disciplineController.addDisciplines)
router.delete('/', disciplineController.removeDisciplines)
router.patch('/', disciplineController.updateDisciplines)

module.exports = router
