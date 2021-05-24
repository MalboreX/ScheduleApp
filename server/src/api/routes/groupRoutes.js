const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

const groupController = require('../controllers/groupController')


router.get('/', groupController.getGroups)

router.use('/', authController.protect)

router.post('/', groupController.addGroups)
router.delete('/', groupController.removeGroups)
router.patch('/', groupController.updateGroups)

module.exports = router
