const express = require("express")
const {createError} = require("../Utils/CreateError") 
const User = require("../Models/user")

const allUsers = async(req,res,next) => {

    try{
         const allusers = await User.find()
         allusers && res.status(200).json({message:"Sucess",allusers})
    }catch(error){
         next(error)
    }

}
//get a specific user 
const singleuser = async(req,res,next) =>{
     try{
         const finduser = await User.findById(req.params.id)
         res.status(200).json({message:"User",finduser})

     }catch(error){
        next(createError(404,"User Not found"))
     }
}

//update a user
const editauser = async(req,res,next)=>{
    const finduser = await User.findById(req.params.id);
    if(!finduser){
       next(createError(404,"User Not Found"))
    }

   try{
        const editUser = await User.findByIdAndUpdate(
           req.params.id,
           {$set:req.body},
           {new:true}
        )
        editUser && res.status(200).json({message:"Sucessfully Updated"})
   }
   catch(error){
      next(error)
   }

}
//delete a user 
const deleteUser  = async (req,res,next)=>{
    const findUser  = await User.findById(req.params.id);
    if(!findUser){
        next(createError(404,"User not found"))
    }
    try{
         const dellUser  = await User.findByIdAndDelete(req.params.id)
         dellUser && res.status(200).json({message:"Sucessfully Deleted"})
    }catch(error){
        next(error)

    }
}

//delete all users 
const deleteAll  = async (req,res,next) =>{
    await User.find();
    
    try{
         const deleteall = await User.deleteMany();
         deleteall && res.status(200).json({message:"All Users Deletd Successfully"})
    }catch(error){
          next(error)
    } 
}
module.exports ={
    allUsers,
    singleuser,
    editauser,
    deleteAll,
    deleteUser
}