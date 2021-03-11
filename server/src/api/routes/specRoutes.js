const express = require('express')
const router = express.Router()

const specController = require('../controllers/specController')

router.get('/', specController.getSpecs)

router.post('/', specController.addSpecs)
router.delete('/', specController.removeSpecs)
router.patch('/', specController.updateSpecs)

module.exports = router
