const mongoose = require('mongoose')

async function connectDB(){
    try {
        await mongoose.connect('mongodb+srv://root:28122003@cluster0.nmqpz.mongodb.net/?retryWrites=true&w=majority')

        const connection = mongoose.connection

        connection.on('connected',()=>{
            console.log("Connect to DB")
        })

        connection.on('error',(error)=>{
            console.log("Something is wrong in mongodb ",error)
        })
    } catch (error) {
        console.log("Something is wrong ",error)
    }
}

module.exports = connectDB