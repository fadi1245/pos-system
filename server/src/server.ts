import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import errorHandler from "./midldeware/ErrorHandlingMiddleware";
import userAuthRoutes from "./routes/userAuth.routes";
import userRoutes from "./routes/userAuth.routes";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userAuthRoutes);

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("backend running");
});

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
