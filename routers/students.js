import express from "express";
import {getStudents, postStudents} from "../controllers/getStudents.js";
import {ageCkecker} from "../middelwares/ageCheck.js";

const router = express.Router();


// create a get router 
router.get("/students", getStudents);
router.post("/students", postStudents); // router middelwares 

export default router;