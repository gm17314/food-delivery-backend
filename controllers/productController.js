const ProductModel = require("../models/ProductModel");

//getAll
const productByCategory = async(req,res)=>{
    try {
        const products = await ProductModel.find(req.query)  //req.query = {category:"burger"}
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

//getById  
const productById = async(req,res)=>{
    try {
        const product = await ProductModel.find(req.params.id)  //req.query = {category:"burger"}
        if (!product){
            res.status(500).json({message:"No product with such id!"})    
        }
        res.status(200).json(product)
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

//create
const createNewProduct = async(req,res)=>{
    try {
        console.log(req.body)
        const newProduct = await ProductModel.create({...req.body})
        console.log(newProduct)
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(400).json(error.message)
    }
} 


module.exports = {productByCategory,productById,createNewProduct}
