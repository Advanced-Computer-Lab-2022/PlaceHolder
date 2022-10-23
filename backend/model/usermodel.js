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
    userType:{
        type:String,
        
    },
    gender:{
        type:String,
        
    },
    country:{
        type:String,
        required: [true,'Please add a password']
    },
},{
    timestamps:true
})

module.exports = mongoose.model('User',userSchema)