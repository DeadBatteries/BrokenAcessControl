import { sendJson } from "../utils/sendJson.js";

export function adminHandler(req, res) {

    const user = req.user;

    if(user!=="admin"){

        console.log(`Invalid Acess on ${Date.now()}`);
        return sendJson(res, 403, {message:"forbidden"});

    };

    console.log(`Authorized Acess on ${Date.now()}`);
    return sendJson(res, 200, {message:"Authorized"});

};