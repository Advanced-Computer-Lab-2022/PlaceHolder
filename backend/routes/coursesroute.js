const express = require('express')
const router = express.Router()
const { ViewCourses,
        AddCourse, 
        ViewCoursePage,
        ViewCoursesIns
                     } = require('../controllers/coursecontroller')

const { protect } = require('../middleware/authMiddleware')

router.get('/', ViewCourses)
router.post('/new',AddCourse)
router.post('/view/:title', ViewCoursePage)
router.post('/getinscourses',ViewCoursesIns)


module.exports = router