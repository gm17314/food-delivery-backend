const multer = require("multer");

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./images")
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.filename)
    }
})

const upload = multer({
    storage
})

const uploadImage = (req,res)=>{
    try {
        res.status(201).json({message:req.files})
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {upload,uploadImage}