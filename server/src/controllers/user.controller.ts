import { Request, Response } from "express";
import { customError } from "../utils/cutomError";
import asyncErrorHandler from "../midldeware/asyncErrorHandler";
import { getAllUsers, getOneUser, softDeleteUser, updateUserById } from "../services/user.services";

const getAlltheUsers= asyncErrorHandler(async (req:Request, res:Response)=>{
    const users = await getAllUsers()

    if(users.length === 0){
        throw new customError("No users found", 404)
    }
    res.status(200).json({
        status:"success",
        data:users,
    })
})

const getUsers = asyncErrorHandler(async(req:Request, res:Response)=>{
    const userId = req.params.id;

    const user = await getOneUser(userId);
    if(!user){
        throw new customError("user not found",404)
    }
    res.status(200).json({
        status: "success",
        data: user,
    })
})

const updateUser = asyncErrorHandler(async(req:Request, res:Response)=>{
    const userId = req.params.id
    const updated = await updateUserById(userId, req.body)

    res.status(200).json({
        status: "success",
        data : updated,
    })   
})

const deleteUser = asyncErrorHandler(async (req:Request, res:Response)=>{
    const userId = req.params.id

    const deleted = await softDeleteUser(userId);

    res.status(200).json({
        status: "success",
        messege: deleted,
    })

})

export {getAlltheUsers, getUsers, updateUser, deleteUser}