const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asynchandler = require('express-async-handler')
const user = require('../model/usermodel')
const course = require('../model/coursesmodel')
const nodemailer = require('nodemailer')
const Corp = require('../model/copreqmodel')

const requestAccess = asynchandler(async (req,res) => {
    const userr = req.body.username
    const courseName = req.body.title

    const reqas = await Corp.create({
        CT_Who_Requested:userr,
        courseName:courseName,
        granted:false
    })
    res.status(200)
})


const getAll = asynchandler(async (req,res) => {
    
    const crops = await Corp.find()
    
    res.status(200).json(crops)
})


const grantCourse = asynchandler(async (req,res) => {
    const username = req.body.user1 
    const course = req.body.courseName
    console.log("Title: " + course)
    console.log("User : " + username)
    const user2 = await user.findOne({username})
    if(user2.courses == null){
        user2.courses = {
            courseName:course,
            currentSubtitle:1,
            receivedCert:"false"
        }
    }else{
        user2.courses.push({
            courseName:course,
            currentSubtitle:1,
            receivedCert:"false"
        })
    }
    console.log(user2)
    const user3 = await user.findOneAndUpdate({username},user2)
    const crops = await Corp.find({CT_Who_Requested:username , courseName:course})
    crops.map(async (crop)=>{
        if(crop.CT_Who_Requested == username & crop.courseName == course){
            crop.granted = true
            const crops2 = await Corp.findOneAndUpdate({CT_Who_Requested:username , courseName:course},{$set:crop})
        }
    })
    console.log(crops)
    
    
    res.status(200)
})






module.exports = {
    requestAccess,
    getAll,
    grantCourse
    
}