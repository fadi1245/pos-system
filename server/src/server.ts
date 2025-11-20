import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { log } from 'console'
import connectDB from './config/db'
import { errorHandler } from './midldeware/ErrorHandlingMiddleware'

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use(errorHandler);

app.get('/',(req,res)=>{
    res.send("backend running")
})
app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`);
    
})