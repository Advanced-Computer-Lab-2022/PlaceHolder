const mongoose = require('mongoose')

const refundSchema = mongoose.Schema({
    userWhoRefunded:{
        type:String, 
    },
    userRole:{
        type:String,
    },
    refundType:{
        type:String
    },
    status:{
        type:String,
    },
    msg:{
        type:String
    },
    course:{
        type:String
    }
    
    
    
},{
    timestamps:true
})

module.exports = mongoose.model('refund',refundSchema)