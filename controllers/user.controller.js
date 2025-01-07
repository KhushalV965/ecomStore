const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/user.model')
const blacklistModel = require('../models/blacklist.model');



module.exports.signup = async (req, res, next) => {
    try {
        const { username, email, password, role } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }
        const isUserAlreadyExists = await userModel.findOne({ email });

        if (isUserAlreadyExists) {
            return res.status(400).json({
                message: 'User already exists'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({
            username,
            email,
            password: hashedPassword,
            role
        });

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" })


        return res.status(201).json({
            message: "User registered successfully",
            user,
            token,
        });


    } catch (error) {
        next(error);
    }
};

module.exports.signing = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "invalid email or password"
            })
        }

        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            return res.status(400).json({
                message: "invalid email or password"
            })
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        return res.status(201).json({
            message: "User signed successfully",
            user,
            token
        })
    } catch (error) {
        next(error);
    }
};




