const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require('mongoose');
const authRouter = require("./api/authApi");
const productRouter = require("./api/productApi");
const uploadRouter = require("./api/uploadApi");
require("dotenv").config();


const PORT = process.env.PORT || 5050
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Db connected"))
.catch((error)=>console.log(error))

app.use(cors({
    origin:["http://localhost:5173"]
}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(authRouter);
app.use(uploadRouter);
app.use(productRouter);

app.listen(PORT,()=>{
    console.log("Sever connected at",PORT)
})  