import  express  from "express";
import bodyParser from "body-parser";
import  ExpressHandlebars  from "express-handlebars";
import ejs from "ejs";

import mongodb from "mongodb";


const app=express();
const port=3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

const MongoClient=mongodb.MongoClient;
const ObjectId=mongodb.ObjectId;
async function getDatabase()
{
    let databaseConnect;
    const client=await MongoClient.connect("mongodb://127.0.0.1:27017");
    databaseConnect=client.db("shopDB");

    if(!databaseConnect)
    {
        console.log("not connected");
    }
    return databaseConnect;
}
app.get("/",async (req,res)=>
{
    let db=await getDatabase();
    const collection=db.collection("products");
    const cursor=collection.find({});
    let product=await cursor.toArray();
    if(req.query.Delete_id)
    {
        await collection.deleteOne({_id: new ObjectId(req.query.Delete_id)})
        res.redirect("/?status=delete")
    }
    res.render("index.ejs",{product});
})

app.post("/product_store",async (req,res)=>
{
    let db= await getDatabase();
    const collection=db.collection("products");
    let products={
        bike: req.body.bike,
        cc:req.body.cc
    }
    await collection.insertOne(products);
    return res.redirect("/?status=insert");
})

app.listen(port,()=>
{
    console.log(`port ${port} connected`);
})