const express = require('express')
const router = express.Router()
const { ViewDashboard  } = require('../controllers/dashcontroller')

router.get('/', ViewDashboard)


module.exports = router