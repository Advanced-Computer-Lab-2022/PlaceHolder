const express = require('express')
const router = express.Router()
const { checkout,getMyTransactions
                     } = require('../controllers/paymentcontroller')



router.post('/stripe-payment',checkout)
router.post('/myTransactions',getMyTransactions)



module.exports = router