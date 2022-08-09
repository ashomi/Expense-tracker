const express = require("express")
const {createError} = require("../Utils/CreateError")
const User = require("../Models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const postUser = async (req,res,next) => {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password,salt)

    try{
    const newUser = new User({
        image:req.body.image,
        username:req.body.username,
        password:hashPassword,
        isAdmin:req.body.isAdmin
    }) 
    const saveUser = await newUser.save();
    res.status(200).json({message:"User Save ",saveUser})
    }
    catch(error){
      console.log(error);
      next(error);

    }


}
const LoginUser = async(req,res,next)=>{
 
   try{
       const user = await User.findOne({
        username:req.body.username
       });
       console.log("User",user);
       if(!user)
          {
            return next(createError(404,"User Not found"))
          }
         const comparePassword =  await bcrypt.compare(req.body.password, user.password)
         if(!comparePassword){
            return next(createError(404,"Wrong Credientials"))
         }
         const token  = jwt.sign({
            id:user._id,isAdmin:user.isAdmin
         },process.env.JWT_SECRET)
         const {password,isAdmin , ...otherdetails} = user._doc;
          res
          .cookie("access_Token",token)
          .status(200)
          .json({details:otherdetails,isAdmin})
   }catch(error){
       next(error);
   }


}

module.exports = {postUser,LoginUser}