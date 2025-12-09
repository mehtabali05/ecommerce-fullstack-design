import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDb from './config/connectDb.js';
const app = express();
const port = process.env.PORT || 5000

connectDb();

app.use("/",(req,res) =>{
    res.send("I am ROOT");
});

app.listen(port,() =>{
    console.log(`I am listening on port ${port}`);
})