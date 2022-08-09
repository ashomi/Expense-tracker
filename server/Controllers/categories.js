const {expcategories} = require('../Models/Admin/ExpenseCateories')
const {createError} = require("../Utils/CreateError")
const AddCategory = async(req,res,next) => {
    
   try{
    const newCategory = new expcategories({
        category:req.body.category
   })

   const saveCat = await newCategory.save();
   saveCat && res.status(200).json({message:"success",saveCat})
   }catch(error){
    next(error)
   }
}

module.exports ={AddCategory}