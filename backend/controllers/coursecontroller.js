const asyncHandler = require('express-async-handler')

const Course = require('../model/coursesmodel')
const user = require('../model/usermodel')

const ViewCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find()
    res.status(200).json(courses)
})




const AddCourse = asyncHandler(async (req, res) => {
    if(!req.body.title){
        res.status(400)
        throw new Error('Please add a Title')
    }
    console.log(req.body.subtitles)
    console.log(req.body.subtitles)
    console.log(req.body.subtitles.videos)
    
    const courses = await Course.create({
        title: req.body.title,
        subtitles: req.body.subtitles,
        subject: req.body.subject,
        price: req.body.price,
        summary: req.body.summary,
        instructorName: req.body.instructorName,
        courseRating: 0,
        totalHours: req.body.totalHours
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
        totalHours: req.body.totalHours
    })
})

const UpdateCourse = asyncHandler(async (req, res) => {
    const courses = await Course.find()
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
    
}