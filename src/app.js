import express  from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app=express();

app.on("error",(error)=>{
        console.log("ERROR :",error);
             throw error
        })

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true

}))

app.use(express.json({limit: "20kb"}))
app.use(express.urlencoded({extended:true,limit: "20kb"}))
app.use(express.static("public"))

app.use(cookieParser())






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


export {app}