import express from "express";
import colors from "colors";
import dotenv from "dotenv";

import studentRouter from "./routers/router.js";
import usersRouter from "./routers/user.js";
import proRouter from "./routers/pro.js";
import getStudents from "./routers/students.js";
import register from "./routers/register.js";
import customer from "./routers/customar.js";

// import controllers 

// init dotenv
dotenv.config();

// init express
const app = express();


// middleware exprestion
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// import studentRouter route here
app.use(studentRouter);
app.use(usersRouter);
app.use(proRouter);
app.use(getStudents);
app.use(register);
app.use(customer);


// init port number here
const PORT = process.env.PORT || 6060;


// createa server 
app.listen(PORT, () => {
    console.log(`Server Is Running Port ${PORT} Number`.bgGreen.black);
});

