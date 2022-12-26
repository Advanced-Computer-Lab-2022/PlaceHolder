const asynchandler = require('express-async-handler')
const user = require('../model/usermodel')
const course = require('../model/coursesmodel')
const nodemailer = require('nodemailer')
const Corp = require('../model/copreqmodel')
const report = require('../model/reportmodel')
const payment = require('../model/paymentsModel')
const refund = require('../model/refundModel')




const getAll = asynchandler(async (req,res) => {
    
    const refunds = await refund.find()
    
    res.status(200).json(refunds)
})

const getMyRefunds = asynchandler(async (req,res) => {
    const userWhoRefunded = req.body.username
    const refunds = await refund.findOne({userWhoRefunded})
    
    res.status(200).json(refunds)
})


const createRefund = asynchandler(async (req,res) => {
    const userWhoReported1 = req.body.user1
    const userRole1 = req.body.role
    const refundType1 = req.body.type
    const status1 = req.body.status
    const msg1 = req.body.msg
    const course1 = req.body.course
    console.log(userWhoReported1)
    const refunds = await refund.create({
        userWhoRefunded:userWhoReported1,
        userRole:userRole1,
        refundType:refundType1,
        status:status1,
        msg:msg1,
        course:course1
    })
    
    res.status(200).json(refunds)
})


const updateStatus = asynchandler(async (req,res) => {
    const userWhoRefunded = req.body.user1
    const course = req.body.course
    const date = new Date()
    var temp3 = null;
    const user2 = await user.findOne({username:userWhoRefunded})
    var newCourses = user2.courses.filter(course1 => !(course1.courseName == course))
    user2.courses = newCourses
    const user3 = await user.findOneAndUpdate({username:userWhoRefunded},user2)
    const refunds = await refund.findOneAndRemove({userWhoRefunded})
    const payments = await payment.findOne({username:userWhoRefunded})
    console.log(payments)
    var temp = null;
    payments.transactions.map((trans) =>{
        if(trans.CoursePaidFor == course & Number(trans.paymentAmount) != null ){
            temp = trans
        }
    })
    payments.wallet = Number(payments.wallet) + Number(temp.paymentAmount)
    
    payments.transactions.push({
        paymentAmout:-1,
        CoursePaidFor:course,
        Description:`Refund For Course : ${course} , Amount Refunded To Wallet ${Number(temp.paymentAmount)}`,
        DateofPurchase: date,
        CurrencyOfPurchase:temp.CurrencyOfPurchase
    })
    console.log(payments)
    const payments1 = await payment.findOneAndUpdate({username:userWhoRefunded},payments)
    res.status(200).json(payments1)
})

// const updateSeen = asynchandler(async (req,res) => {
//     const reports1 = await report.updateMany({seen:'false'},{$set:{seen:'true'}})
//     res.status(200).json(reports1)
// })


// const updateFollowUpUser = asynchandler(async (req,res) => {
//     const _id = req.body.id
//     const followupUserMessage = req.body.newmsg

//     const reports = await report.findOne({_id})

//     if(reports.followup == null){
//         reports.followup = {
//             UserMsg:followupUserMessage,
//             AdminReply:''
//         }
//     }else{
//         reports.followup.push({
//             UserMsg:followupUserMessage,
//             AdminReply:''
//         })
//     }

//     const reports1 = await report.findOneAndUpdate({_id},{$set:reports})
//     res.status(200).json(reports1)

// })











module.exports = {
    
    getAll,
    createRefund,
    getMyRefunds,
    updateStatus
}