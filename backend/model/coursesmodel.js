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
                answerA:{
                    type:String
                },
                answerB:{
                    type:String
                },
                answerC:{
                    type:String
                },
                answerD:{
                    type:String
                },
                correctanswer:{
                    type:String
                }
                }
            ],
            videos: [
                {
                    videotitle:{
                        type:String
                    },
                    url:{
                        type:String
                    },
                    videodescription:{
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
    },
    preview:{
        type: String,
    },
    thumbnail:{
        type: String
    },
    ratings:[
        {
            userwhorated:{
                type:String
            },
            userRate:{
                type:Number
            },
            userMessage:{
                type:String
            }
        }
    ],
    totalratings:{
        type:Number
    },
    totalStars:{
        type:Number
    },
     amountOfDiscount:{
         type:Number
     },
    ExpiryDate:{
         type:Date
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Course', courseSchema)