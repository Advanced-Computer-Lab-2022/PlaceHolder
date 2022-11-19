const mongoose = require('mongoose')

const courseSchema = mongoose.Schema(
    // {
    //     user:{
    //         type: mongoose.Schema.Types.ObjectId,
    //         required: true,
    //         ref: 'user',
    //     }
    // },
    {
    title: {
        type: String,
        required: true
    },
    subtitles: [
        {
            subt:{
                type:String,
                
            },
            description:{
                type:String
            },
            totalh:{
                type:Number
            },
            exercises: [
                {
                question:{
                    type:String
                },
                }
            ],
            videos: [
                {
                    videotitle:{
                        type:String
                    },
                    url:{
                        type:String
                    }
                }
            ],
            
        }
    ],
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