import { NextFunction, Request, Response } from "express";
import asyncErrorHandler from "../midldeware/asyncErrorHandler";
import { customError } from "../utils/cutomError";
import { adjustStock } from "../services/stockAdjustment.services";

const adjustStockController = asyncErrorHandler(
    async (req:Request, res:Response, next: NextFunction)=>{
        const {product,change, reason,adjustedBy}= req.body

        if(!product||!change){
            return next(new customError("Product ID and change amount are required", 400))
        }
    
        const result = await adjustStock({
          product,
          change,
          reason,
          adjustedBy,
        })
    
        res.status(200).json({
          status: "success",
          data: result,
        })
      }
    )
    
export { adjustStockController }
    