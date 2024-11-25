import express from "express";
import { fileURLToPath } from "url";
import {dirname} from "path";
import bodyParser from "body-parser";
const __dirname=dirname(fileURLToPath(import.meta.url));
let band="";
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bandname);
app.listen(3000,()=>{console.log("created")});
app.get("/",(req,res)=>
{
    res.sendFile(__dirname + "/index.html");
})

function bandname(req,res,next)
{
    band=req.body["first"] + req.body["last"];
    console.log(band);

    next();
}
app.post("/submit",(req,res)=>
{
    console.log(req.body);
    console.log(band)
    res.send(`<h1>${band}</h1>`);
})

