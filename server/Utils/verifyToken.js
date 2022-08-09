const jwt = require("jsonwebtoken");
const User = require("../Models/user");
const {createError} = require("./CreateError")

const verifyToken  =  (req,res,next) =>{
    
    const token = req.cookie.access_Token;
    if(!token){
        return next(createError(404,"You are not Authenticated"))
    }
    //third parameter is returning us user information or error
    jwt.verify(token, process.env.JWT_SECRET,(err,user)=>{
        
        if(err){
            return next(createError(401,"token is not valid"))
        }

        req.user = user;
        next()
 

    });  
}

//verify user 

const verifyUser = (req,res,next) => {

    verifyToken(req,res,next, ()=>{
        if(req.body.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            next(createError(403,"Please Login "))
        }
    })


}


//verify admin

const verifyAdmin = (req,res,next) =>{

    verifyToken(req,res,next, ()=>{
        if(req.user.isAdmin){
            next();
        }
        else{
            next(createError(403,"You are not an Admin "))
        }
    })

}

module.exports ={
    verifyToken,
    verifyUser,
    verifyAdmin
}