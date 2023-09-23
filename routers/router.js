import express from "express";
import {studentInfo, studentPost} from "../controllers/students.js";

const router = express.Router();

router.get("/", studentInfo);

router.post("/student", studentPost);



export default router;