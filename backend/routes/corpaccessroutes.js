const express = require('express')
const router = express.Router()
const { requestAccess, getAll, grantCourse
                     } = require('../controllers/corpcontroller')


router.post('/reqAccess', requestAccess)
router.get('/',getAll)
router.post('/grant',grantCourse)

module.exports = router