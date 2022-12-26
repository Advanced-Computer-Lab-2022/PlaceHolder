const express = require('express')
const router = express.Router()
const { checkout
                     } = require('../controllers/paymentcontroller')



router.post('/stripe-payment',checkout)


module.exports = router