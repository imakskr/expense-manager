//requires
const express = require('express');
const path=require("path");

//conf & init
const server_port=3000;

//init app
const app = express();

//middleware
app.use("/share", express.static( path.join(__dirname, "web_client") ) );
app.use( express.json() );
app.use( express.urlencoded({ extended: false}) );




//All get requests
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "web_client", "index.html"));
});



//All post requests
app.post("/expense/add", (req,res)=>{
    let params = req.body;
    let expense=params.expense;
    let responseData = {};    
    if(expense!=undefined && expense.length>0){
        responseData.message="SUCCESS";
    }else{
        responseData.message="FAILED";
    }
    res.setHeader("Content-Type", "application/json");
    res.json({message : 'success'});

});

app.listen(server_port);