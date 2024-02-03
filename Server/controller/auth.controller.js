import User from '../models/User.model.js'
import bcrypt from 'bcryptjs'
import jwt  from 'jsonwebtoken'
import dotenv from "dotenv";

export const signup = async (req, res, next) => {
    // console.log(req.body)
    res.send(req.body)

    const { username, email, password } = req.body
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt)

    try {
        let user = await User.create({
            username, email, password: hashPass
        })
    } catch (error) {
        next(error)
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(400, 'User not found!'));
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(400, 'invalid credentials!'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        res.cookie('acess_token', token, { httpOnly: true }).status(200).json(validUser);
    } catch (error) {
        next(error)
    }
}