import { sendJson } from "../utils/sendJson.js";
import { users } from "../storage/users.js";

export function adminHandler(req, res) {

    const user = req.user;

    const foundUser = users.find(user=>user.name===req.user);   
    
    /*

    Aqui user não é realmente seguro, ele apenas simula uma validação baseada em nome, mas o cliente ainda consegue acessar a rota
    com user=joao, o servidor ainda confia no input do cliente.

    */
    

    if(foundUser.role !== "admin"){

        console.log(`Invalid Acess on ${Date.now()}`);
        return sendJson(res, 403, {message:"forbidden"});

    };

    console.log(`Authorized Acess on ${Date.now()}`);
    return sendJson(res, 200, users);

};