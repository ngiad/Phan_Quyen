import  express  from "express";
import { Login, Register } from "../Controlles/UserControlles.js";
import { RegisterMidlleware, SigninMiddleware } from "../Middleware/UserMiddleware.js";



const UserRouter = express()


UserRouter.post("/",SigninMiddleware,Login)
UserRouter.post("/register",RegisterMidlleware,Register)

export default UserRouter