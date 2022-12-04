const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
var bodyParser = require('body-parser');
const port = process.env.PORT || 5000


connectDB()

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json())

app.set("view engine", "ejs");
var nodemailer = require("nodemailer");
//app.use(express.urlencoded({ extended: false }));




app.use('/',require('./routes/dashroute'))
app.use('/courses',require('./routes/coursesroute'))
app.use('/users',require('./routes/userroutes'))


app.listen(port, () => console.log(`Server started on port ${port}` ))