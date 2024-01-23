import { Router } from "express";
import { checkAuth, checkExistingUser } from "../middlewares/auth.js";

const viewRoutes = Router();

viewRoutes.get('/', checkAuth, (req, res) => {
    const {user} = req.session;
    res.render('index', user);
});

viewRoutes.get('/login', checkExistingUser, (req, res) => {
    res.render('login');
});

viewRoutes.get('/register', checkExistingUser, (req, res) => {
    res.render('register');
});

viewRoutes.get('/restore-password', checkExistingUser, (req, res) => {
    res.render('restore-password');
});

viewRoutes.get('/faillogin', (req, res) => {
    res.render('faillogin');
});
viewRoutes.get('/failregister', (req, res) => {
    res.render('failregister');
});

export default viewRoutes;