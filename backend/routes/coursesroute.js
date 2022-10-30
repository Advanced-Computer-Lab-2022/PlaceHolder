const express = require('express')
const router = express.Router()
const { ViewCourses,
        AddCourse, 
        ViewCoursePage
                     } = require('../controllers/coursecontroller')

const { protect } = require('../middleware/authMiddleware')

router.get('/', ViewCourses)
router.post('/new',AddCourse)
router.get('/view/:title', ViewCoursePage)


module.exports = router