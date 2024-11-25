const fs= require("fs");
const { json } = require("stream/consumers");
const a=[1,3,2,2,2,2];

fs.writeFile("index.txt",JSON.stringify(a),(err)=>{
    if (err) throw err;
        console.log("file created and content wrote ");
})

fs.readFile("./index.txt", "utf8" ,(err,data)=>
    {
        if(err) throw err;
        console.log(data);
    });