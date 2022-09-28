import jsonwebtoken from "jsonwebtoken"
import { UserModel } from "../Model/ModelUser.js"

function signJWT (username,namespace,){
    return jsonwebtoken.sign(username,namespace,{expiresIn : "8h"})
}


export const Login = (req,res) =>{
    try {
        const token =  signJWT({username : req.body.username},"login") 
        res.json({token}).status(200)
    } catch (error) {
        res.status(500).json({false : false})
    }
}

export const Register = async(req,res) =>{
    try {
        const User = await UserModel.findOne({username})
        const token = signJWT({username : User.username},"login")
        res.json({token}).status(200)
    } catch (error) {
        res.status(500).json({false : false})
    }
}