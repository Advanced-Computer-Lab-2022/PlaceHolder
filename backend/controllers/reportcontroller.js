const asynchandler = require('express-async-handler')
const user = require('../model/usermodel')
const course = require('../model/coursesmodel')
const nodemailer = require('nodemailer')
const Corp = require('../model/copreqmodel')
const report = require('../model/reportmodel')




const getAll = asynchandler(async (req,res) => {
    
    const reports = await report.find()
    
    res.status(200).json(reports)
})



const createReport = asynchandler(async (req,res) => {
    const userWhoReported1 = req.body.user1
    const userRole1 = req.body.role
    const reportType1 = req.body.type
    const status1 = req.body.status
    const msg1 = req.body.msg
    const reports = await report.create({
        userWhoReported:userWhoReported1,
        userRole:userRole1,
        reportType:reportType1,
        status:status1,
        msg:msg1
    })
    
    res.status(200).json(reports)
})











module.exports = {
    
    getAll,
    createReport
    
    
}