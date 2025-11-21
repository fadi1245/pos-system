import { Request, Response } from "express";
import User from "../models/User";
import { generateToken } from "../utils/generatetoken";

export const loginUser = async (req:Request, res: Response)=>{
    const {username, password}=req.body
    try{
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({message:"Invalid Username"})
        }
        const isMatch = await user.comparePassword(password);

        if(!isMatch){
            return res.status(400).json({message:"password is wrong"})
        }
        const token = generateToken({id:user._id.toString()})
        return res.status(200).json({
            _id: user._id,
            username: user.username,
            token
        })
    }
    catch(err:any){
            return res.status(500).json({message:err.message})
    }
}