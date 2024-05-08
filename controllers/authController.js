const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSignIn = async (req, res) => {
    try {
        const { username, email, isAdmin } = req.body;
        const isExisting = await UserModel.findOne({ email })
        if (isExisting) {
            throw new Error("Already such an account with this email, Try to login!")
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = await UserModel.create({ username, email, password: hashedPassword, isAdmin });
        const { password, ...others } = newUser._doc
        const token = jwt.sign({ id: newUser._id, isAdmin: newUser.isAdmin }, process.env.JWT_SECRET, { expiresIn: '5h' })
        return res.status(201).json({ others, token })

    } catch (error) {
        res.status(500).json(error.message)
    }
}

const userLogin = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });
        if (!user) {
            throw new Error("User credentials are wrong")
        }

        const comparePassword = await bcrypt.compare(req.body.password, user.password)
        if (!comparePassword) {
            throw new Error("User credentials are wrong")
        }

        const { password, ...others } = user._doc
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '5h' })
        return res.status(201).json({ others, token })

    } catch (error) {
        res.status(500).json(error.message)
    }

}

module.exports = { userSignIn, userLogin }