 const jwt = require("jsonwebtoken");

 //verifyToken

 const verifyToken = async(req,res,next)=>{
    if (!req.headers.authorization) {
        return res.status(403).json({message:"Not authorized. no token"})
    }
    if (req.headers.authorization){
        const token = req.headers.authorization
        jwt.verify(token,process.env.JWT_SECRET,(err,data)=>{
            if (err){
                return res.status(403).json({message:"Wrong or expired password"})
            }
            req.user = data
            next()
        })
    }
 }


 //verifyTokenAdmin

 const verifyTokenAdmin = async(req,res,next)=>{
    if (!req.headers.authorization) {
        return res.status(403).json({message:"Not authorized. no token"})
    }
    if (req.headers.authorization){
        const token = req.headers.authorization
        jwt.verify(token,process.env.JWT_SECRET,(err,data)=>{
            if (err){
                return res.status(403).json({message:"Wrong or expired password"})
            }
            if (!data.isAdmin){  //data = { id: user._id, isAdmin: user.isAdmin }
                return res.status(403).json({message:"You are not admin"})};
            req.user = data
            next()
        })
    }
 }

 module.exports = {verifyToken,verifyTokenAdmin}