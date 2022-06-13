const express = require('express');
const app = express();
const connectDB = require("./connection/connection")
const router = require("./routes/router")

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router)



app.listen(3000, () => {
    console.log("Server Started at 3000");
})