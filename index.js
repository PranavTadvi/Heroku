const express = require("express");

const app = express();


app.get("/",(req,res)=>{
  
    res.send("Heroku Testing!!!")
})

app.listen(5000,(req,res)=>{
    console.log("server is running.....");
})