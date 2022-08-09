const {Calendar} = require("../Models/calendar")

const addCaledar = async(req,res,next)=>{
    try{
        const addCaledar  = new Calendar({
            calendar:req.body.calendar,
            userCalendar:req.body.userCalendar
        })
     const saved = await addCaledar.save();
     saved && res.status(200).json({message:"successfully added calendar"});

    }catch(error){
        next(error)

    }

}
const getCalendar = async(req,res,next)=>{
    try{
        const getcal = await Calendar.find();
        getcal && res.status(200).json({message:"calendars",getcal})
    }catch(error){
         next(error)
    }
}

module.exports = {addCaledar,getCalendar}