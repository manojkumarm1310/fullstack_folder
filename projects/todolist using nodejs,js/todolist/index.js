import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded(import.meta.url));
var days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; 
const heading={
    todoheading:"Work List",
    tododay:"",
    todomonth: "",
    tododate:"",
    values:""
};
var Time= new Date();
app.get("/",(req,res)=>
{
    res.render("index.ejs",heading)
})
app.use(addlist);
app.get("/calendar",(req,res)=>
{
    heading.todoheading="";
    heading.tododay= days[Time.getDay()];
    heading.todomonth=months[Time.getMonth()];
    heading.tododate=Time.getDate();
    res.render("index.ejs",heading)
})

app.get("/work",(req,res)=>
    {
        heading.todoheading="Work List";
        heading.tododay="";
        heading.todomonth= "";
        heading.tododate="";
        res.render("index.ejs",heading)
    })

var list=[];

app.post("/submit",(req,res)=>
{
    res.render("index.ejs",{heading})
})

function addlist(req,res,next)
{
 heading.values=req.body["list"];
 next();   
}

app.listen(3000,()=>{console.log("connected")});