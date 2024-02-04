import User from '../models/User.model.js'
import bcrypt from 'bcryptjs'
import jwt  from 'jsonwebtoken'


export const signup = async (req, res, next) => {
    console.log(next)
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
        if (!validUser) return next(err.errorHandler(400, 'User not found!'));
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) return next(err.errorHandler(400, 'invalid credentials!'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const {password:pass, ...rest} = validUser._doc;
        res.cookie('acess_token', token, { httpOnly: true }).status(200).json(rest);
    } catch (error) {
        next(error)
        // console.log(error)
    }
}