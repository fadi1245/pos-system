import { NextFunction, Request, Response, request } from "express";
import asyncErrorHandler from "../midldeware/asyncErrorHandler";
import { customError } from "../utils/cutomError";
import { createReceipt, getReceiptById } from "../services/receipt.services";

const createReceiptController = asyncErrorHandler(
    async (req:Request, res:Response,next:NextFunction)=>{
        const {items}=req.body;

        if(!items || !Array.isArray(items)||items.length===0){
            return next(new customError("Inavlid billings items",400))
        }
        const newReceipt = await createReceipt(items)
        res.status(201).json({
            status:"success",
            data:newReceipt
        })  
    }
)

const getReceiptController = asyncErrorHandler(
    async (req: Request, res: Response) => {
      const receiptId = req.params.id;
  
      const receipt = await getReceiptById(receiptId);
  
      res.status(200).json({
        status: "success",
        data: receipt,
      });
    }
  );

  export {createReceiptController,getReceiptController}