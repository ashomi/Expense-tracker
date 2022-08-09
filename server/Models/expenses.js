const mongoose = require('mongoose');

const expensesSchema = mongoose.Schema({

    expensetitle :{
        type:String,
        required:true
    },
    expensedesc:{
        type:String,
        default:"N/A"
    },

    ammount:{
        type:Number,
        required:true
    },

    incomeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Income'
    }

},{timestamp:true})

const expenses = mongoose.model('Expenses',expensesSchema);
module.exports = {expenses}

