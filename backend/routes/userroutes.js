const express = require('express')
const router = express.Router()
const { registeruser, loginuser, viewuser, updatetos,registerCourse,refreshuser } = require('../controllers/usercontroller')

const { protect } = require('../middleware/authMiddleware')

router.post('/new', registeruser)
router.post('/login', loginuser)
router.get('/me',protect, viewuser)
router.post('/updatetos',updatetos)
router.post('/registercourse',registerCourse)
router.post('/refreshuser',refreshuser)

module.exports = router