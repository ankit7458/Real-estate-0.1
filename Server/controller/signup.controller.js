import User from '../models/User.model.js'
import bcrypt from 'bcryptjs'

export const signup = async (req, res, next) => {
    // console.log(req.body)
    res.send(req.body)

    const { username, email, password } = req.body
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt)

    try {
        let user = await User.create({
            username, email, password : hashPass
        })
    } catch (error) {
        next(error)
    }
} 