import express from "express";
import {sendAdmin, loginAdmin} from "../controller/admin.js";
const router=express.Router();


router.post("/send",sendAdmin);
router.post("/login",loginAdmin);

export  default router;
