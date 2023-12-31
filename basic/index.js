const express = require('express');
const cors = require("cors");
// read environment variables
require('dotenv').config();
const initRoutes = require('./src/routes');

const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET','POST','PUT','DELETE']
}));
// read data from client then convert text into json format
app.use(express.json());
// if client sent an array or object instead of text, this will take over
app.use(express.urlencoded({
    extended: true
}));

initRoutes(app);

const PORT = process.env.PORT || 8888;
const listener = app.listen(PORT, ()=>{
    console.log("SERVER is running on "+listener.address().port);
})