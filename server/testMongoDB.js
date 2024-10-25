const mongoose = require('mongoose');

async function testConnection() {
    try {
        await mongoose.connect('mongodb+srv://root:28122003@cluster0.nmqpz.mongodb.net/?retryWrites=true&w=majority');
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}

testConnection();
