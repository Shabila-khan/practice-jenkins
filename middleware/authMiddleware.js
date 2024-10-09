const { error } = require("console")
const jwt = require("jsonwebtoken")

const isAuthenciate=(req,res,next)=>{
    const token =req.header("authToken")

    if(!token){
        return res.status(401).json({message:"login required"})
    }

    jwt.verify(token,process.env.JWT_SECRET,async(error,decode)=>{
        if(error){
            return res.status(401).json({message:"token is expire or invalid"})
        }
        else{
            req.user=decode
            next()
        }
    })
        

}

module.exports=isAuthenciate