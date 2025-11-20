import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { log } from 'console'
import connectDB from './config/db'

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("backend running")
})
app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`);
    
})