// const packageName = require("sillyname");
// import superheroes from "superheroes";

// const silly=packageName().toUpperCase();
// console.log(`${silly}`);

// const name = superheroes.random();
// console.log(`i am ${name}!`);

import inquirer from "inquirer";
import img from "qr-image";
import fs from "fs";
var s;
inquirer.prompt([{message:"url_image",name:"URL"}
]).then((answer)=>{
    const url=answer.URL;
    const image=img.image(url);
    image.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("url.txt",url,(err)=>{
        if(err) throw err;
        console.log("file created");
    })
    fs.readFile("url.txt","utf8",(err,data)=>{
        if(err) throw err;
         console.log(data);
    })
})