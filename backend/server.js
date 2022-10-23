const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))




app.use('/',require('./routes/dashroute'))
app.use('/courses',require('./routes/coursesroute'))
app.use('/users',require('./routes/userroutes'))


app.listen(port, () => console.log(`Server started on port ${port}` ))