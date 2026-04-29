import { auth } from "./middlewares/auth.js";
import { adminHandler } from "./handlers/adminController.js";
import express from "express";
import { users } from "./storage/users.js";

import { sendJson } from "./utils/sendJson.js";
const app = express();
const port = 3000; 

app.get("/", (req,res)=>{

    res.send("Home directory");

});

app.get("/public", (req,res)=>{

    res.send("Public directory");

});


app.get("/admin/users", auth, adminHandler);

app.get("/api/users",(req,res)=>{

    console.log("Acess /api/users")
    return sendJson(res,200,users);

});

app.listen(port, ()=>{

    console.log(`Server running on port ${port}`);

});