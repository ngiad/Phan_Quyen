import { UserModel } from "../Model/ModelUser.js";


export const SigninMiddleware = async (req,res,next) => {
    console.log("middleware");
    try {
        const user = await UserModel.findOne({username : req.body.username})
        if(user.password === req.body.password){
            return next()
        }else{
            return res.status(500).json({false : false})
        }
    } catch (error) {
        res.status(500).json({false : false})
    }
}

export const RegisterMidlleware =  async(req,res,next) =>{
    const { username } = req.body
    try {
        const user = await UserModel.find({username})
        if(user.username){
            return res.status(500).json({false : false})
        }else{
            const user = req.body
            const NewUser = await new UserModel(user)
            await NewUser.save()
            return next()
        }
    } catch (error) {
        res.status(500).json({false : false})
    }
}


