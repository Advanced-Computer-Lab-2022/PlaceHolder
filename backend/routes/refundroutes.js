const express = require('express')
const router = express.Router()
const { getAll,createRefund,getMyRefunds,updateStatus
                     } = require('../controllers/refundcontroller')



router.get('/',getAll)
router.post('/new',createRefund)
router.post('/myRefunds',getMyRefunds)
router.post('/updateStatus',updateStatus)


module.exports = router