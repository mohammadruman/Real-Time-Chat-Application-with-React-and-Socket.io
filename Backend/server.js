const express = require("express");
const path = require('path')
require('dotenv').config({path:path.resolve(__dirname,'./.env')})
const connectDB = require("./config/db");
const { chats } = require("./Data/data");
const userRoutes = require('./routes/userRoutes')
const app = express();

connectDB();
//to access the body of the request Json Data
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello welcome");
});
app.use('/api/user',userRoutes)

// Retrieve the PORT from environment variables
const PORT = process.env.PORT || 5000;


const server = app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}...`);
});
