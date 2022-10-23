const express = require('express')
const router = express.Router()
const { ViewCourses,
        AddCourse
                     } = require('../controllers/coursecontroller')

const { protect } = require('../middleware/authMiddleware')

router.get('/', ViewCourses)
router.post('/new',AddCourse)

module.exports = router