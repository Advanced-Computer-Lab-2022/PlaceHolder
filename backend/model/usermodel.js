const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required: [true,'Please add your username'],
        unique:true
    },
    firstName:{
        type:String,
        required: [true,'Please add a password']
    },
    lastName:{
        type:String,
        required: [true,'Please add a password']
    },
    email:{
        type:String,
        required: [true,'Please add your email'],
        unique:true
    },
    password:{
        type:String,
        required: [true,'Please add a password']
    },
    gender:{
        type:String,
        
    },
    country:{
        type:String,
        required: [true,'Please add a Country']
    },
    role:{
        type:String,
        required: [true, '']
    },
    toscheck:{
        type:String,
        
    },courses:[
        {
            courseName:{
                type:String
            },
            currentSubtitle:{
                type:Number
            },
            receivedCert:{
                type:String
            }
        }
    ],
    minibio:{
        type:String
    },
    ratings:[
        {
            userwhorated:{
                type:String
            },
            usersRating:{
                type:Number
            },
            usersreview:{
                type:String
            }
        }
    ],
    ratingssentins:[
        {
            instructorrated:{
                type:String
            }
        }
    ],
    coursesrated:[
        {
            coursenamerated:{
                type:String
            }
        }
    ],
    requestedCourse:[
        {
            courseName:{
                type:String
            },
            granted:{
                type:String
            }
        }
    ]
},{
    timestamps:true
})

module.exports = mongoose.model('User',userSchema)