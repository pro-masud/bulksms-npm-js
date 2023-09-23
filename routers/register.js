import express from "express";
import {userRegster} from "../controllers/userRegster.js";

const router = express.Router();

router.post("/register", userRegster);

export default router;