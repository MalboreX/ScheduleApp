const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

router.get('/admin', authController.getInfo)
router.post('/auth', authController.login)
router.post('/verify', authController.verifyToken)

router.use(authController.protect)
router.patch('/admin', authController.updateInfo)

module.exports = router
