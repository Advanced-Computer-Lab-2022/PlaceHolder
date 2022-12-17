const mongoose = require('mongoose')

const corpreqSchema = mongoose.Schema({
    CT_Who_Requested:{
        type:String, 
    },
    courseName:{
        type:String
    },
    granted:{
        type:Boolean,
    }
    
    
},{
    timestamps:true
})

module.exports = mongoose.model('Corp',corpreqSchema)