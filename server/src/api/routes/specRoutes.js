const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

const specController = require('../controllers/specController')

router.get('/', specController.getSpecs)

router.use(authController.protect)

router.post('/', specController.addSpecs)
router.delete('/', specController.removeSpecs)
router.patch('/', specController.updateSpecs)

module.exports = router
