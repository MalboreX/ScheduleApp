const express = require('express')
const router = express.Router()

const specController = require('../controllers/specController')

router.get('/', specController.getSpecs)

module.exports = router
