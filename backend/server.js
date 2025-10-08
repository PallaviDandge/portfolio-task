import express from 'express';
import mongoose from'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
 
import userRouter from './routes/users.js';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true});

mongoose.connection.on('connected',()=>{
    console.log("connected to mongoDB")
})
mongoose.connection.on('error',(err)=>{
    console.log("error connecting",err)
})
    
app.use('/users', userRouter);

app.listen(5000, () => 
    {
        console.log("server is running")

    })