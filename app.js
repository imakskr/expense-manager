//requires
const express = require('express');
const fs=require('fs');
const path=require("path");

//conf & init
const server_port=3000;

//init app
const app = express();

//middleware
app.use("/share", express.static( path.join(__dirname, "web_client") ) );





//All get requests
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "client", "index.html"));
});



//All post requests


app.listen(server_port);