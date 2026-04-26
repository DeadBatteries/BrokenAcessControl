import { sendJson } from "../utils/sendJson.js";

export function auth(req, res, next){

    const user = req.query.user;

    if(!user){

        console.log(`Invalid Acess on ${Date.now()}`);
        sendJson(res, 401, {message: "Unauthorized"});

    };

    req.user = user;
    next();

};