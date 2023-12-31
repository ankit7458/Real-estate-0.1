import express from 'express'
import dataBaseConnect from './db'

dataBaseConnect();
const app = express();


app.listen(3000, () => {
    console.log('Server is running on port 3000!!')
});