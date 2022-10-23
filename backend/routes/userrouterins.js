const express = require('express')
const router = express.Router()
const {  loginuserins, viewuserins } = require('../controllers/usercontroller')

const { protectins } = require('../middleware/authMiddleware')

router.post('/login', loginuserins)
router.get('/me',protectins, viewuserins)


module.exports = router