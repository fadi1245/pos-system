import express from "express";
import protectRoutes from "../midldeware/protectRoutes";
import {createCategoryController,getCategoriesController,getCategoryController,updateCategoryController,deleteCategoryController,} from "../controllers/category.controller";

const router = express.Router();
router.post("/", protectRoutes, createCategoryController);
router.get("/", protectRoutes, getCategoriesController);
router.get("/:id", protectRoutes, getCategoryController);
router.patch("/:id", protectRoutes, updateCategoryController);
router.delete("/:id", protectRoutes, deleteCategoryController);

export default router;
