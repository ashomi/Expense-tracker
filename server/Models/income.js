const mongoose = require('mongoose');
const incomeSchema = mongoose.Schema({

   
    incometitle:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        default:"N/A"
    },
    ammount:{
        type:Number,
        required:true
    },
    calendarId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Calendar"
    }
},{timestamps:true});

const income = mongoose.model('Income',incomeSchema)

module.exports ={income}