const asyncHandler = require('express-async-handler')

const Course = require('../model/coursesmodel')
const user = require('../model/usermodel')

const ViewCourses = asyncHandler(async (req, res) => {
    
    const courses = await Course.find()
    
    res.status(200).json(courses)
})


const ViewCoursesIns = asyncHandler(async (req, res) => {
    const username = req.body.username
    const courses = await Course.find()
    var returns = []
    courses.map((course)=>{
        if(course.instructorName==username){
            if(returns==null){
                returns=course
            }else{
                returns.push(course)
            }
        }
    })
    res.status(200).json(returns)
})


const ViewCoursesTrainee = asyncHandler(async (req, res) => {
    const username = req.body.username
    const courses = await Course.find()
    const user1 = await user.findOne({username})
    var b = [...courses]
    var a = [...user1.courses]
    var returns = []
    b.map((course1)=>{
        a.map((course) => {
            if(course.courseName == course1.title){
                if(returns == null){
                    returns = course1
                }else{
                    returns.push(course1)
                }
            }
        })
    })
    
   
    console.log(returns)
    res.status(200).json(returns)
})




const AddCourse = asyncHandler(async (req, res) => {
    if(!req.body.title){
        res.status(400)
        throw new Error('Please add a Title')
    }
    var totalhs = 0
    let temp = [...req.body.subtitles]
    var _temp = temp.map((sub) => {
        console.log(sub.totalh)
        totalhs = totalhs + sub.totalh
    })
    
    const courses = await Course.create({
        title: req.body.title,
        subtitles: req.body.subtitles,
        subject: req.body.subject,
        price: req.body.price,
        summary: req.body.summary,
        instructorName: req.body.instructorName,
        courseRating: 0,
        totalHours:totalhs,
        preview:req.body.preview,
        thumbnail:req.body.thumbnail,
        ratings:req.body.ratings,
        totalratings:0,
        totalStars:0,
        amountOfDiscount:0,
        ExpiryDate:'',

    })
    console.log(courses)
    res.status(200).json({
        title: req.body.title,
        subtitles: req.body.subtitles,
        subject: req.body.subject,
        price: req.body.price,
        summary: req.body.summary,
        instructorName: req.body.instructorName,
        courseRating: 0,
        totalHours: totalhs,
        preview:req.body.preview,
        thumbnail:req.body.thumbnail,
        ratings:req.body.ratings,
        totalratings:0,
        totalStars:0,
        amountOfDiscount:0,
        ExpiryDate:'',
    })
})

const UpdateCourse = asyncHandler(async (req, res) => {
    const courses = await Course.find()
    res.status(200).json(courses)
})


const AddDiscount = asyncHandler(async (req, res) => {
    const {title,ExpiryDate,amountOfDiscount} = req.body
    const newdiscount = { 
        ExpiryDate:ExpiryDate,
        amountOfDiscount:amountOfDiscount
    }
    console.log(title)
    console.log(newdiscount)
    const courses = await Course.findOneAndUpdate({title},newdiscount)
    console.log(courses)
    res.status(200).json(courses)
})


const ViewCoursePage = asyncHandler(async (req, res) => {
    try{
        const courses = await Course.findOne({ title: req.params.title});
        res.status(200).json(courses);
        
    }
    catch(err){
        res.status(500).send("Error");
    }
})


module.exports = {
    ViewCourses,
    AddCourse,
    UpdateCourse,
    ViewCoursePage,
    ViewCoursesIns,
    AddDiscount,
    ViewCoursesTrainee
    
}