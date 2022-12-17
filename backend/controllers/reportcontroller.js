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
    const seen = 'false'
    const reports = await report.create({
        userWhoReported:userWhoReported1,
        userRole:userRole1,
        reportType:reportType1,
        status:status1,
        msg:msg1,
        seen:seen
    })
    
    res.status(200).json(reports)
})


const updateStatus = asynchandler(async (req,res) => {
    const userWhoReported1 = req.body.user1
    const userRole1 = req.body.role
    const reportType1 = req.body.type
    const status1 = req.body.status
    const msg1 = req.body.msg
    const seen = 'true'

    const reports = await report.findOne({userWhoReported:userWhoReported1,userRole:userRole1,reportType:reportType1,msg:msg1})
    reports.seen = seen
    reports.status = status1
    console.log(reports)
    const reports1 = await report.findOneAndUpdate({userWhoReported:userWhoReported1,userRole:userRole1,reportType:reportType1,msg:msg1},{$set:reports})
    console.log(reports1)
    res.status(200).json(reports1)
})

const updateSeen = asynchandler(async (req,res) => {
    const reports1 = await report.updateMany({seen:'false'},{$set:{seen:'true'}})
    res.status(200).json(reports1)
})











module.exports = {
    
    getAll,
    createReport,
    updateStatus,
    updateSeen
    
    
}