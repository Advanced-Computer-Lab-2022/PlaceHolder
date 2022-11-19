const express = require('express')
const router = express.Router()
const { registeruser, loginuser, viewuser, updatetos } = require('../controllers/usercontroller')

const { protect } = require('../middleware/authMiddleware')

router.post('/new', registeruser)
router.post('/login', loginuser)
router.get('/me',protect, viewuser)
router.post('/updatetos',updatetos)


module.exports = router