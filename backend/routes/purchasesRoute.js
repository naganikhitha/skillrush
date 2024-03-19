import express from "express";
import {purchaseCourse, getDashboard} from "../controller/purchases.js";
const router=express.Router();


router.post("/",purchaseCourse);

router.get("/dashboard",getDashboard);

export  default router;
