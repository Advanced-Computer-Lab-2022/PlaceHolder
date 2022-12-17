const express = require('express')
const router = express.Router()
const { getAll,createReport,updateStatus,updateSeen
                     } = require('../controllers/reportcontroller')



router.get('/',getAll)
router.post('/new',createReport)
router.post('/updateStatus',updateStatus)
router.get('/updateSeen',updateSeen)


module.exports = router