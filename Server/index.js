import express from 'express'
import dataBaseConnect from './db.js'
import userRouter from './routes/user.route.js'
import signupRouter from './routes/auth.route.js'

dataBaseConnect();
const app = express();
app.use(express.json())


app.use('/api/user', userRouter)
app.use('/api/auth', signupRouter)


app.listen(3000, () => {
    console.log('Server is running on port 3000!!')
});