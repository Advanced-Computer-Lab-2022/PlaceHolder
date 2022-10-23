const express = require('express')
const router = express.Router()
const { registeruserit, loginuserit, viewuserit } = require('../controllers/usercontroller')

const { protectit } = require('../middleware/authMiddleware')

router.post('/new', registeruserit)
router.post('/login', loginuserit)
router.get('/me',protectit, viewuserit)


module.exports = router