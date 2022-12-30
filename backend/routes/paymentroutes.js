const express = require('express')
const router = express.Router()
const { checkout,getMyTransactions,payByWallet
                     } = require('../controllers/paymentcontroller')



router.post('/stripe-payment',checkout)
router.post('/myTransactions',getMyTransactions)
router.post('/payWallet',payByWallet)



module.exports = router