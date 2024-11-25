import express from "express";
import ejs from "ejs";
import  dirname  from "path";
import  {fileURLToPath}  from "url";
import bodyParser from "body-parser";


// const __dirname=dirname(fileURLToPath(import.meta.url));
const app=express();
app.use(bodyParser.urlencoded({extended:true}))
const day=new Date().getDay();

app.get("/",(req,res)=>
{
    const set={
        title:"workEvent",
        event:"",
        work:""
    };
    if(day==6  || day==0)
    {
     set.event="weekend";
     set.work=" enjoy the day";
    }
    else{
        set.event="weekday";
        set.work="time to work";
    }
    res.render("index.ejs",set);
})
app.listen(3000,()=>{console.log("connect")});
