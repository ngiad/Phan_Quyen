import  express  from "express";
import cors from "cors"
import mongoose from "mongoose";
import bodyParser from "body-parser"
import UserRouter from "./src/Router/UserRouter.js";

const app = express()
const URL = "mongodb+srv://Ngiad:Ngiad001@cluster0.2ts8aja.mongodb.net"
app.use(cors())
app.use(bodyParser.json())

app.use("/login",UserRouter)




mongoose.connect(URL,{useNewUrlParser : true})
.then(() =>{
    app.listen(5000,() =>{
        console.log("Server connected");
    })
})
.catch((e) =>{
    console.log("Server connected false : ",e);
})