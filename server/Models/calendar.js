const mongoose = require("mongoose")

const calendarSchema = mongoose.Schema({

    calendar:{
        type: String,
        required:true   
    },
    userCalendar:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    }
})

const Calendar = mongoose.model('Calendar',calendarSchema)

module.exports = Calendar