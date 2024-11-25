import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname=dirname(fileURLToPath(import.meta.url));

const app=express();
app.listen(3000,()=>{
    console.log("created");
});
app.use(bodyParser.urlencoded ({ extended: true}))
app.get("/",(req,res)=>
{
    res.sendFile(__dirname + "/index.html")
})

app.post("/submit",(req,res)=>
{
    console.log(req.body);
    res.send(req.body)
    res.send(`${email}`);
})
