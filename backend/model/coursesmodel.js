const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitles: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    summary: {
        type: String,
        require: true
    },
    instructorName: {
        type: String,
        require: true
    },
    instructorID: {
        type: Number,
        require: true
    },
    courseRating:{
        type: Number,
        require: false
    },
    totalHours:{
        type: Number,
        require: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Course', courseSchema)