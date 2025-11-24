import express from "express";
import protectRoutes from "../midldeware/protectRoutes";
import { adjustStockController } from "../controllers/stockAdjustment.controller";

const router = express.Router();

router.post("/adjust", protectRoutes, adjustStockController);

export default router;
