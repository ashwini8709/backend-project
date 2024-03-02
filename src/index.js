// require('dotenv').config()
// import app from "/app.js"
import dotenv from "dotenv";
import connectDB from "./db/index.js";

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
dotenv.config({
    path: './env'
})






connectDB()
.then(()=>{
    
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port ${process.env.PORT}`);
    })
})
.catch((err)=>{
        console.log("MONGODB connection failed!!",err);
})

































//connnect to the database with mongoose .This is the first approach.

// import express  from "express";

// const app= express()

// (async()=>{
//     try {
//       await mongoose.connect (`${process.env.MONGODB_URL}/${DB_NAME}`)

//       app.on("error",(error)=>{
//         console.log("ERROR :",error);
//         throw error
//       })

//       app.listner(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
//       })
//     }
//     catch(error){
//         console.log("Error :" ,error);
//         throw error
//     }
// })()



