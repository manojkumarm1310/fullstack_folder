//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
var pass="";
const app=express();
const __dirname=dirname(fileURLToPath(import.meta.url));
var istrue=false;
app.use(bodyParser.urlencoded({extended:true}));
app.use(getpass);
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

function getpass(req,res,next)
{
    pass=req.body["password"];
    if(pass.toLowerCase()==="manoj")
    {
        istrue=true;
    }
    else{
        istrue=false;
    }
    console.log(pass);
    next();
}
app.post("/check",(req,res)=>
{
    if(istrue)
    {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else
    {
        res.sendFile(__dirname + "/public/index.html");
    }
})


app.listen(3000,()=>{
    console.log("listing on port 3000");
})