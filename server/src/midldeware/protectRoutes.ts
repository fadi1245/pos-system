import { NextFunction, Request, Response } from "express"
import asyncErrorHandler from "./asyncErrorHandler"
import jwt, { JwtPayload } from 'jsonwebtoken'
import User from "../schemas/user.schema"
declare global {
    namespace Express{
        interface Request{
            user?:any
        }
    }
}

const protectRoutes= asyncErrorHandler(
    async (req:Request, res:Response, next: NextFunction)=>{
        const authHeader = req.headers.authorization

        if(!authHeader||!authHeader.startsWith("bearer")){
            return next(new Error("you are not logged in"))
        }

        const token = authHeader.split(" ")[1]

        const decode = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as JwtPayload

        const userId = decode.id

        const user = await User.findById(userId)

        if(!user){
            return next(new Error("User does not exist"))
        }
        req.user = user;
        next()
    }
)

export default protectRoutes;