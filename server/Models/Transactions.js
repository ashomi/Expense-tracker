const mongoose = require("mongoose")

const TransactionSchema = new mongooseSchema({
      
    username:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    calendars:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Calendar'
    },
    income:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Incomes'
    }
})