import { Router } from "express";
import jwt from 'jsonwebtoken';
import { tokenSecret } from "../utils/constants.js";
import { passportCall } from "../utils/passportCall.js";
import { authorization } from "../utils/authorization.js";

const sessionRoutes = Router();

sessionRoutes.post('/login', (req, res) => {
    const {email, password} = req.body;
    if(email === 'fergiraudo@gmail.com' && password === '123456'){
        const token = jwt.sign({email, password, role: 'user'}, tokenSecret, {expiresIn: '24h'});
        res.cookie('coderCookieToken', token, {
            maxAge: 60 * 60 * 1000,
            httpOnly: true
        }).send({message: 'User logged'});
    }
    else{
        res.status(401).send({message: 'UnAuthorized'});
    }
});

sessionRoutes.get('/current', passportCall('jwt'), authorization('user'), (req, res) => {
    res.send(req.user);
});

export default sessionRoutes;