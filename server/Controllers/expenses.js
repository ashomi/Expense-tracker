const {expenses} = require("../Models/expenses")

const addExpense = async(req,res,next)=>{
    try{
        const add = new expenses({
            expensetitle:req.body.expensetitle,
            expensedesc:req.body.expensedesc,
            ammount:req.body.ammount,
            incomeId:req.body.incomeId

        })
        const saved = await add.save();
        saved && res.status(200).json({message:"success",saved})
    }catch(error){
       next(error)
    }

}

module.exports = {addExpense}