import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";

var app= express();
var port=3000;
var __dirname=dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended:true}));
app.post("/check",(req,res)=>
{
    var pass=req.body["password"];
    if(pass=="AchuDasTheMass")
    {
        res.sendFile(__dirname+"/public/secret.html");
    }
    else{
        res.redirect("/");
    }
})
app.get("/",(req,res)=>
{
    res.sendFile(__dirname+"/public/index.html");
})

app.listen(port,(req,res)=>{
    console.log("listening to port "+port);
})
