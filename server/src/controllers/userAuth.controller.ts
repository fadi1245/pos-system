import { NextFunction, Request, Response } from "express";
import asyncErrorHandler from "../midldeware/asyncErrorHandler";
import { authenticateUser, createUser } from "../services/userAuth.services";
import { customError } from "../utils/cutomError";
import { generateKey } from "crypto";
import { generateToken } from "../utils/generatetoken";

const signUpUser = asyncErrorHandler(async (req: Request, res: Response)=>{
    const newUser = await createUser(req.body)

    res.status(201).json({
        status: "success",
        data: newUser,
    })
})

const loginUser = asyncErrorHandler(
    async (req:Request, res: Response, next: NextFunction)=>{
        const {email, password}= req.body

        if(!email||!password){
            return next(new customError("Email and password are required",400))
        }

        const authenticatedUser = await authenticateUser(email, password)
        const token = generateToken(authenticatedUser._id as string);

        res.status(200).json({
            status:"success",
            token,
            user: authenticatedUser
        })
    }
)

export {signUpUser, loginUser}