import express  from "express";
import morgan from "morgan";

const app=express();

app.use(morgan("combined"));
app.listen(3000,()=>
{
    console.log("created");
});

app.get("/",(req,res)=>{
    res.send("hello");
});

function logger(req,res,next)
{
    console.log("request:" ,req.method);
    console.log("url:",req.url);
    next();
}
app.use(logger);