import { Router } from 'express';

const userRoutes = Router();

const users = [];

userRoutes.get('/', (req, res) => {
    res.send(users);
});

const checkUser = (req, res, next) => {
    const user = req.body;
    if(!user.name || !user.lastName){
        return res.status(400).send({message: 'user incompleted'});
    }
    next();
}

userRoutes.post('/', checkUser, (req, res) => {
    const user = req.body;
    users.push(user);
    res.send({message: 'user added'});
});

export default userRoutes;