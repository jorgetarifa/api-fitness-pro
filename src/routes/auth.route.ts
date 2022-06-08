import express, { Request, Response } from "express";
import auth from "../firebase/auth" 
import { validator } from '../helpers/joiValidator'
import { authSchema } from "../schemas/auth.schema"


 const authRouter = express.Router();


authRouter.post('/createUser',validator.body(authSchema), async (req: Request, res: Response) => {
    try{
        const { email, password } = req.body;
        const result = await auth.createUser(email,password);
        res.status(201).send(result);
    }catch(error){
      return  res.send(error);
    }
})

authRouter.post('/login',validator.body(authSchema), async (req: Request, res: Response)  =>{
    try{
        const { email, password } = req.body;
        const result = await auth.logIn(email,password);
        res.status(201).send(result);
    }catch(error){
        res.status(500).send(error)
    }
})



export default authRouter