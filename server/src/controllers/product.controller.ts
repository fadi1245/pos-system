import { NextFunction, Request, Response } from "express";
import asyncErrorHandler from "../midldeware/asyncErrorHandler";
import { createProduct, deleteProductById, getAllproducts, getProductById, updateProductById } from "../services/product.services";
import { customError } from "../utils/cutomError";

const createProductController = asyncErrorHandler(
    async (req:Request, res:Response)=>{
        const newProduct = await createProduct(req.body)

        res.status(201).json({
            status:"Success",
            data: newProduct,
        })
    }
)

const getProductsController =asyncErrorHandler(
    async(req:Request, res:Response)=>{
        const products = await getAllproducts()

        res.status(200).json({
            status: "success",
            data: products
        })
    }
)

const getProductController = asyncErrorHandler(
    async(req:Request,res:Response, next: NextFunction)=>{
        const {id} = req.params;
        const product = await getProductById(id)

        if(!product){
            return next(new customError("product not found",404))
        }
        res.status(200).json({
            status:"success",
            data: product
        })
    }
)

const updateProductController = asyncErrorHandler(
    async(req:Request,res:Response)=>{
        const {id}=req.params

        const updated = await updateProductById(id, req.body)
        res.status(200).json({
            status:"success",
            data: updated
        })
    }
)

const deleteProductController = asyncErrorHandler(
    async (req: Request, res: Response) => {
      const { id } = req.params;
  
      const message = await deleteProductById(id);
  
      res.status(200).json({
        status: "success",
        message,
      });
    }
)

export {createProductController,getProductsController,getProductController,updateProductController,deleteProductController}