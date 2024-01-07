import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

// const Url = process.env.DBURL

const Url = "mongodb://localhost:27017/"


const dataBaseConnect = () => {
    
    try {
        mongoose.connect(Url)
        console.log('Database connected sucessfully!!')
    } catch (error) {
        console.log(error)
    }
}

export default dataBaseConnect;
