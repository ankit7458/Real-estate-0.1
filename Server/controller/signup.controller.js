import User from '../models/User.model.js'
import bcrypt from 'bcryptjs'

export const signup = async (req, res) => {
    // console.log(req.body)
    res.send(req.body)

    const { username, email, password } = req.body
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt)

    let user = await User.create({
        username, email, password : hashPass
    })
}