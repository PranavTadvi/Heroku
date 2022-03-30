const express = require("express");

const app = express();

const port = Process.env.PORT || 5000;
app.get("/",(req,res)=>{
  
    res.send("Heroku Testing!!!")
})

app.listen(port,(req,res)=>{
    console.log("server is running.....");
})