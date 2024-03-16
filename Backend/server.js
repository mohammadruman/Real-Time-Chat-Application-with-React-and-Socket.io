const express = require("express");
const path = require('path')
require('dotenv').config({path:path.resolve(__dirname,'./.env')})
const connectDB = require("./config/db");
const { chats } = require("./Data/data");
const app = express();

// Load environment variables from .env file


connectDB();


app.get('/', (req, res) => {
    res.send("Hello welcome");
});

app.get('/api/chat', (req, res) => {
    res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
    const singlechat = chats.find((c) => c._id === req.params.id);
    res.send(singlechat);
});

// Retrieve the PORT from environment variables
const PORT = process.env.PORT || 5000;


const server = app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}...`);
});
