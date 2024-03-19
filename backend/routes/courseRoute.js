import express from "express";
import {sendCourses, getCourses, getSingleCourse, purchaseCourse} from "../controller/courses.js";
const router=express.Router();


router.get("/",getCourses);
router.get("/:id",getSingleCourse);
router.post("/send",sendCourses);
router.post("/purchase",purchaseCourse);

export  default router;
