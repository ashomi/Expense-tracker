const mongoose = require('mongoose');
const expCategoriesSchema = mongoose.Schema({

   category:{
    type:String,
   }
   
});

const expcategories = mongoose.model('expcategories',expCategoriesSchema)

module.exports ={expcategories}