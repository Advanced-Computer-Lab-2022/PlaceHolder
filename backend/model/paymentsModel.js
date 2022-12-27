const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    username:{
        type:String, 
    },
    transactions:[
        {
            paymentAmount:{
                type:Number
            },
            CoursePaidFor:{
                type:String
            },
            Description:{
                type:String
            },
            DateOfPurchase:{
                type:Date
            },
            CurrencyOfPurchase:{
                type:String
            }
        }
    ],
    wallet:{
        type:Number
    },
    userCurrency:{
        type:String
    }
    
    
    
},{
    timestamps:true
})

module.exports = mongoose.model('payment',paymentSchema)