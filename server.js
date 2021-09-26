const express = require('express');

const app= express();

app.get("/" , function(req,res){
    res.send("Hello Express")
});
app.get("/users" , function(req,res){
    res.send(users)
})
app.post("/users" , function(req,res){
    res.send(users)
})

app.listen(2345,function (){
    console.log("listening on port");
})
