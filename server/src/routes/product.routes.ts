import express from "express";
import protectRoutes from "../midldeware/protectRoutes";
import {
  createProductController,
  getProductsController,
  getProductController,
  updateProductController,
  deleteProductController,
} from "../controllers/product.controller";

const router = express.Router();

router.post("/", protectRoutes, createProductController);
router.get("/", protectRoutes, getProductsController);
router.get("/:id", protectRoutes, getProductController);
router.patch("/:id", protectRoutes, updateProductController);
router.delete("/:id", protectRoutes, deleteProductController);

export default router;
