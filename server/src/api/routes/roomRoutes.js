const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

const roomController = require('../controllers/roomController')

router.get('/', roomController.getRooms)

router.use(authController.protect)

router.post('/', roomController.addRooms)
router.delete('/', roomController.removeRooms)
router.patch('/', roomController.updateRooms)

module.exports = router
