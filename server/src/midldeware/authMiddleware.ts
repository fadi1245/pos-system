import { NextFunction, Request, Response } from "express";
import { RequestWithUser } from "../types/RequestWithUser";
import jwt from 'jsonwebtoken'
import User from "../models/User";

export const protect = async(
    req: RequestWithUser,
    res: Response,
    next: NextFunction
)=>{
    let token 
    if(req.headers.authorization?.startsWith("Bearer")){
        try{
            token= req.headers.authorization.split(" ")[1]
            const decode = jwt.verify(
                token,
                process.env.JWT_SECRET as string
            ) as {id:string}
            req.user = (await User.findById(decode.id).select("-password")) as any;
            return next()
        }
        catch(err){
                return res.status(401).json({message:"Not authorized"})
        }
    }
    return res.status(401).json({message:"Not authorized"})
}