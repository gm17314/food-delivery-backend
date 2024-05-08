const mongoose = require("mongoose")

//Schema
const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        min:4
    },
    description:{
        type:String,
        required:true,
        trim:true,
        min:5
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    review:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    
})

//Model
const ProductModel = mongoose.model("Product",productSchema);
module.exports = ProductModel;