import { Request, Response, NextFunction } from "express"
import asyncErrorHandler from "../midldeware/asyncErrorHandler"
import {createCategory,getAllCategories,getCategoryById,updateCategoryById,deleteCategoryById} from "../services/category.services"
import { customError } from "../utils/cutomError"

const createCategoryController = asyncErrorHandler(
  async (req: Request, res: Response) => {
    const newCategory = await createCategory(req.body)

    res.status(201).json({
      status: "success",
      data: newCategory,
    })
  }
)

const getCategoriesController = asyncErrorHandler(
  async (req: Request, res: Response) => {
    const categories = await getAllCategories()

    res.status(200).json({
      status: "success",
      data: categories,
    })
  }
)

const getCategoryController = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    const category = await getCategoryById(id)

    if (!category) {
      return next(new customError("Category not found", 404))
    }

    res.status(200).json({
      status: "success",
      data: category,
    })
  }
)

const updateCategoryController = asyncErrorHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const updated = await updateCategoryById(id, req.body)

    res.status(200).json({
      status: "success",
      data: updated,
    })
  }
)

const deleteCategoryController = asyncErrorHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const message = await deleteCategoryById(id)

    res.status(200).json({
      status: "success",
      message,
    })
  }
)

export {createCategoryController,getCategoriesController,getCategoryController,updateCategoryController,deleteCategoryController}
