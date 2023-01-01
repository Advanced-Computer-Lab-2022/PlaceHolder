const express = require('express')
const router = express.Router()
const { ViewCourses,
        AddCourse, 
        ViewCoursePage,
        ViewCoursesIns,
        AddDiscount,
        ViewCoursesTrainee,
        GenerateCert,
        GenerateCertEmail,
        AddDiscountMultiple,
        getMostPop
                     } = require('../controllers/coursecontroller')

const { protect } = require('../middleware/authMiddleware')

router.get('/', ViewCourses)
router.post('/new',AddCourse)
router.post('/view/:title', ViewCoursePage)
router.post('/getinscourses',ViewCoursesIns)
router.post('/gettraineecourses',ViewCoursesTrainee)
router.post('/adddiscount',AddDiscount)
router.post('/adddiscountMult',AddDiscountMultiple)
router.get('/certf/:title/:firstname/:lastname',GenerateCert)
router.post('/certfEmail',GenerateCertEmail)
router.get('/mostPop',getMostPop)

module.exports = router