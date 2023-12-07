import { Router } from 'express';
import { users } from './users.routes.js';

const viewsRoutes = Router();


const food = [
    {
        name: 'Asado',
        price: 5000
    },
    {
        name: 'Ñoquis',
        price: 3500
    },
    {
        name: 'Milanesa',
        price: 3000
    },
    {
        name: 'Empanadas',
        price: 4500
    },
    {
        name: 'Pizza',
        price: 3700
    },
]

viewsRoutes.get('/', (req, res) => {
    const pos = Math.floor((Math.random() * users.length));
    const user = users[pos];
    const isAdmin = user.role === 'admin';
    user.isAdmin = isAdmin;
    res.render('index', {user, food, title: 'Usuarios', style: 'index.css'});
});

viewsRoutes.get('/register', (req, res) => {
    res.render('register');
})

export default viewsRoutes;
