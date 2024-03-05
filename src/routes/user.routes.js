import { Router } from "express";
import { generateUser } from "../utils.js";

const userRoutes = Router();

userRoutes.get('/', (req, res) => {
    const users = [];
    for(let i=0; i<100; i++){
        users.push(generateUser());
    }
    res.send({satus: 'success', payload: users});
});

export default userRoutes;