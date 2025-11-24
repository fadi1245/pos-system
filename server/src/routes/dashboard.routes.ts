import express from "express"
import protectRoutes from "../midldeware/protectRoutes"
import { getDashboardStats } from "../controllers/dashboard.controller"

const router = express.Router()

router.get("/", protectRoutes, getDashboardStats)

export default router
