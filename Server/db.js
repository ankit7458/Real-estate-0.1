const mongoose = require('mongoose')
const Url = "mongodb://localhost:27017/"


const dataBaseConnect = () => {
    
    try {
        mongoose.connect(Url)
    } catch (error) {
        console.log(error)
    }
}

module.exports = dataBaseConnect;
