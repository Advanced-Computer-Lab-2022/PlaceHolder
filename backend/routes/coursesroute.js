const express = require('express')
const router = express.Router()
const { ViewCourses,
        AddCourse, 
        ViewCoursePage,
        ViewCoursesIns,
        AddDiscount,
        ViewCoursesTrainee,
                     } = require('../controllers/coursecontroller')

const { protect } = require('../middleware/authMiddleware')

router.get('/', ViewCourses)
router.post('/new',AddCourse)
router.post('/view/:title', ViewCoursePage)
router.post('/getinscourses',ViewCoursesIns)
router.post('/gettraineecourses',ViewCoursesTrainee)
router.post('/adddiscount',AddDiscount)

module.exports = router