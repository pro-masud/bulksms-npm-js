import express from "express";
import {createCustomer} from "../controllers/createCustomer.js";

// create a router 
const router = express.Router();

router.post("/customar", createCustomer);


export default router;