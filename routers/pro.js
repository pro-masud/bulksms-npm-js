import express from "express";
import {porGetData} from "../controllers/porGetData.js";

const router = express.Router();

// create get router here
router.get("/pro", porGetData);

export default router; 