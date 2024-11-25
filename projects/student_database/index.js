import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import dotenv from "dotenv";
import expresshandlebars from "express-handlebars";
import mysql from "mysql";
import bodyParser from "body-parser";
  
const app=express();
const __dirname= dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",(req,res)=>
{
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000,()=>
{
    console.log("connected");
})