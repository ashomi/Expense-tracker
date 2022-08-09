const {income} = require('../Models/income');

const addIncome = async(req,res,next)=>{
     
    try{
       const AddIncome = new income({
        incometitle:req.body.incometitle,
        description:req.body.description,
        ammount:req.body.ammount,
        calendarId:req.body.calendarId
      })
      const saved = await AddIncome.save();
      saved && res.status(200).json({message:"Success",AddIncome})

    }catch(error){
       next(error)
    }

    
}

module.exports = {addIncome}