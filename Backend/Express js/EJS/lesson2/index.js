import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app=express();
var fullname="";
app.use(bodyParser.urlencoded({extended:true}))
app.use(getInput);
const d={
    data:"Enter the input"
}
app.get("/",(req,res)=>
{
    res.render("index.ejs",d)
});

app.post("/submit",(req,res)=>
{
    console.log(fullname);
    d.data=`There are ${fullname.length} letters in the input`; 
    res.render("index.ejs",d);

})
function getInput(req,res,next)
{
   fullname = req.body["fName"]+req.body["lName"];
   next();
}
app.listen(3000,()=>
{
    console.log("connected");
})
