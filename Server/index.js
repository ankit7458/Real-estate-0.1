import express from 'express'
import dataBaseConnect from './db.js'
import userRouter from './routes/user.route.js'

dataBaseConnect();
const app = express();


app.get('/api/user',userRouter)


app.listen(3000, () => {
    console.log('Server is running on port 3000!!')
});