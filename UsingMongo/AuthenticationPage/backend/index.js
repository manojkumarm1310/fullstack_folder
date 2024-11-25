import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongodb from "mongodb";

const mongoClient=mongodb.MongoClient;
const ObjectId=mongodb.ObjectId;
dotenv.config();
const app=express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const PORT = process.env.PORT;

async function getdatabase()
{
    let database;
    const client =await mongoClient.connect("mongodb://127.0.0.1:27017");
    database=client.db("Authentication")
    if(!database)
    {
        console.log("Database is not connected");
    }
    console.log("Database is connected");
    return database;
}
app.post("/login",async (req,res)=>{
    let UserData={
        email:req.body.email,
        password:req.body.password
    }
    let database=await getdatabase();
    const collection=database.collection("UserDetail");
    const projection={_id:0,name:0}
    const cursor=await collection.findOne(UserData,{projection});
    if(!cursor)
    {
        return res.status(200).json({status:"Failed"})
    }
    return res.status(201).json({status:"Passed"});
})
app.get("/signup",async(req,res)=>{
    let database=await getdatabase();
    const collection=database.collection("UserDetail");
    const projection={email:1,_id:0};
    const cursor=collection.find({}).project(projection);
    const detail=await cursor.toArray();
    return res.send(detail);
})
app.get("/changepassword",async(req,res)=>{
    let database=await getdatabase();
    const collection=database.collection("UserDetail");
    const projection={email:1,_id:0};
    const cursor=collection.find({}).project(projection);
    const detail=await cursor.toArray();
    return res.send(detail);
})
app.post("/signup",async(req,res)=>{
    let UserData={
        name:req.body.fullname,
        email:req.body.email,
        password:req.body.password
    }
    let database=await getdatabase();
    const collection=database.collection("UserDetail");
    const isInsert=await collection.insertOne(UserData);
    if(!isInsert)
    {
        return res.status(400).json({Error:"Data not inserted"});
    }
    return res.status(200).json(isInsert);
})
app.put("/changepassword",async(req,res)=>{
    let UserData={
        email:req.body.email,
        password:req.body.password
    }
    let database=await getdatabase();
    const collection=database.collection("UserDetail");
    const cursor=await collection.updateOne({email:UserData.email},{$set:{password:UserData.password}});
    console.log(cursor);
    if(!cursor)
    {
        return res.status(200).json({Error:"Password didn't change"})
    }
    return res.status(201).json(cursor);
})
app.listen(PORT,()=>
{
    console.log(`Server is connected with ${PORT}`);
})