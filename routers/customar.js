import express from "express";
import {createCustomer} from "../controllers/createCustomer.js";
import multer, { diskStorage } from "multer";



// create a router 
const router = express.Router();

// multer setup here
const storage = diskStorage({
    destination: (req, file, cb) => {
        cb( null, "public" );
    },
    filename: (req, file, cb) => {
        cb( null, Date.now() + "_" + Math.floor(Math.random() * 100000) + "_" + file.originalname );
    }
});


const customerFileUpload = multer({storage: storage});

router.post("/customer", customerFileUpload.single("photo"), createCustomer);


export default router;