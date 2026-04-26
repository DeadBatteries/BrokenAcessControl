import { auth } from "./middlewares/auth.js";
import { adminHandler } from "./handlers/adminController.js";
import express from "express";

const app = express();
const port = 3000; 

app.get("/", (req,res)=>{

    res.send("Home directory");

});

app.get("/public", (req,res)=>{

    res.send("Public directory");

});


app.get("/admin", auth, adminHandler);


app.listen(port, ()=>{

    console.log(`Server running on port ${port}`);

});