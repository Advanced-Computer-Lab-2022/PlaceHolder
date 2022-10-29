const asyncHandler = require('express-async-handler')

const Course = require('../model/coursesmodel')

const ViewCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find()
    res.status(200).json(courses)
})


const AddCourse = asyncHandler(async (req, res) => {
    if(!req.body.title){
        res.status(400)
        throw new Error('Please add a Title')
    }
    
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

module.exports = {
    ViewCourses,
    AddCourse,
    UpdateCourse,
    
}