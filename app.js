const express = require('express');
const app = express();
const connectDB = require("./connection/connection")

connectDB();



app.listen(3000, () => {
    console.log("Server Started at 3000");
})