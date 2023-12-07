import { Router } from 'express';

const userRoutes = Router();

export const users = [
    {
        firstName: 'Fernando',
        lastName: 'Giraudo',
        age: 32,
        email: 'fergiraudo@gmail.com',
        phone: 123456,
        role: "admin"
    },
    {
        firstName: 'Veronica',
        lastName: 'Gomez',
        age: 28,
        email: 'ver@gmail.com',
        phone: 6558,
        role: 'user'
    },
    {
        firstName: 'Carlos',
        lastName: 'Giraudo',
        age: 66,
        email: 'car_los@gmail.com',
        phone: 99999,
        role: 'admin'
    },
    {
        firstName: 'Caren',
        lastName: 'Gonzalez',
        age: 35,
        email: 'car@gmail.com',
        phone: 231554,
        role: 'user'
    },
    {
        firstName: 'Sergio',
        lastName: 'Sosa',
        age: 55,
        email: 'sergio@gmail.com',
        phone: 33333,
        role: 'admin'
    },
];

userRoutes.get('/', (req, res) => {
    res.send(users);
});

userRoutes.post('/', (req, res) => {
    try {
        const user = req.body;
        users.push(user);
        res.send({message: 'user added'});
    } catch (error) {
        console.error(error);
        res.status(400).send({message: 'invalid user'});
    }
});

export default userRoutes;