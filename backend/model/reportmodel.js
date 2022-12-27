const mongoose = require('mongoose')

const reportSchema = mongoose.Schema({
    userWhoReported:{
        type:String, 
    },
    userRole:{
        type:String,
    },
    reportType:{
        type:String
    },
    status:{
        type:String,
    },
    msg:{
        type:String
    },
    seen:{
        type:String
    },
    followup: [
        {
            UserMsg:{
                type:String
            },
            AdminReply:{
                type:String
            }
        }
    ]
    
    
},{
    timestamps:true
})

module.exports = mongoose.model('report',reportSchema)