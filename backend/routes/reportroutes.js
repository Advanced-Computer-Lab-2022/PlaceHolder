const express = require('express')
const router = express.Router()
const { getAll,createReport
                     } = require('../controllers/reportcontroller')



router.get('/',getAll)
router.post('/new',createReport)


module.exports = router