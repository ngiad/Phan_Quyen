import mongoose from "mongoose";

const Shema = new mongoose.Schema({
    username: {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    decentralization : {
        type : String,
        default : "User"
    }
},{ timestamps : true})


export const UserModel = mongoose.model("user",Shema)