const mongoose = require("mongoose")
const url = "mongodb://localhost:27017/expenseTracker"
const Connection  = async () =>{
           try{
              mongoose.connect(url,{
                useUnifiedTopology:true,
                useNewUrlParser:true,
              });
              console.log("Mongo Connection Success")
           }
           catch(error){
            console.log(error)
           }
}
module.exports = Connection