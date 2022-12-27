const express = require('express')
const router = express.Router()
const { getAll,createReport,updateStatus,updateSeen,getMyReports,updateFollowUpUser
                     } = require('../controllers/reportcontroller')



router.get('/',getAll)
router.post('/new',createReport)
router.post('/updateStatus',updateStatus)
router.get('/updateSeen',updateSeen)
router.post('/view',getMyReports)
router.post('/updateFollowUser',updateFollowUpUser)


module.exports = router