import express from 'express'
import dataBaseConnect from './db.js'
import userRouter from './routes/user.route.js'
import signupRouter from './routes/auth.route.js'
import 'dotenv/config'

dataBaseConnect();
const app = express();
app.use(express.json())


app.use('/api/user', userRouter)
app.use('/api/auth', signupRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });


app.listen(3000, () => {
    console.log('Server is running on port 3000!!')
});