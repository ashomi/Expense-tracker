const mongoose = require("mongoose");
const userschema = mongoose.Schema({
    image:{
        type:String
    },
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

const User = mongoose.model('Users',userschema)
module.exports = User