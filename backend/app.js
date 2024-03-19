import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from  "./routes/reservationRoute.js";
import adminRouter from  './routes/adminRoute.js';
import courseRouter from  "./routes/courseRoute.js";
import purchasesRouter from  "./routes/purchasesRoute.js";

 






const app=express();

dotenv.config({path:"./config.env"});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/v1/reseravtion",reservationRouter);
app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/courses",courseRouter);
app.use("/api/v1/purchases",purchasesRouter);

app.get("/",(req,res,next)=>{return res.status(200).json({
    success:true,
    message:"hello world again"
})})
dbConnection();
app.use(errorMiddleware);
export default app;
