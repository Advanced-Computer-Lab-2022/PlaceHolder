const express = require('express')
const router = express.Router()
const { registeruser, loginuser, viewuser, updatetos,registerCourse,refreshuser, updateEmail, updateBio, updatePassword, forgotpass , resetpass, resetpasspost , updateRating , updateRatingCourse, updateSubtitle } = require('../controllers/usercontroller')

const { protect } = require('../middleware/authMiddleware')

router.post('/new', registeruser)
router.post('/login', loginuser)
router.get('/me',protect, viewuser)
router.post('/updatetos',updatetos)
router.post('/registercourse',registerCourse)
router.post('/refreshuser',refreshuser)
router.post('/updateemail',updateEmail)
router.post('/updatebio',updateBio)
router.post('/updatepass',updatePassword)
router.post('/forgotpass',forgotpass)
router.get('/reset-password/:id/:token',resetpass)
router.post('/reset-password/:id/:token',resetpasspost)
router.post('/updaterating',updateRating)
router.post('/updateratingcourse',updateRatingCourse)
router.post('/updateSubtitle',updateSubtitle)

module.exports = router