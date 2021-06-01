const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

router.get('/getInfo', authController.getInfo)
router.post('/auth', authController.login)

router.post('/verify', authController.verifyToken)

module.exports = router
