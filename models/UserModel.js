const mongoose = require("mongoose")

//Schema
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        min:6,
        max:50
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

//Model
const UserModel = mongoose.model("User",userSchema);
module.exports = UserModel;