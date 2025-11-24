import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import connectDB from "./config/db"
import errorHandler from "./midldeware/ErrorHandlingMiddleware"

import userAuthRoutes from "./routes/userAuth.routes"
import productRoutes from './routes/product.routes'
import categoryRoutes from './routes/category.routes'
import stockAdjustmentRoutes from './routes/stockAdjustment.routes'
import receiptRoutes from './routes/receipt.routes'
import dashboardRoutes from './routes/dashboard.routes'

dotenv.config()
connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", userAuthRoutes)
app.use("/api/products", productRoutes)
app.use("/api/categories", categoryRoutes)
app.use("/api/stock", stockAdjustmentRoutes)
app.use("/api/receipts", receiptRoutes)
app.use("/api/dashboard", dashboardRoutes)

app.get("/", (req, res) => {
  res.send("backend running")
})

app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`)
})
