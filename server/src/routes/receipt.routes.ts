import express from "express"
import protectRoutes from "../midldeware/protectRoutes"
import {
  createReceiptController,
  getReceiptController,
} from "../controllers/receipt.controller"

const router = express.Router()

router.post("/", protectRoutes, createReceiptController)

router.get("/:id", protectRoutes, getReceiptController)

export default router
