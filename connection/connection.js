const mongoose = require("mongoose");

const connectDB = () => {
    try {
        mongoose.connect("mongodb://localhost:27017/News", () => {
            console.log("Database Connected");
        })
    } catch (error) {
        console.log("error in database Connection");
    }
}

module.exports = connectDB;