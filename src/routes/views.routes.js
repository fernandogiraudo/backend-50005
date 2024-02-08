import { Router } from "express";
import { checkAuth, checkingExistingUser } from "../middlewares/authentication.midlewares.js";
import passport from "passport";

const viewsRoutes = Router();

viewsRoutes.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    const user = req.session.user;
    console.log({user});
    // res.render('index', user);
});

viewsRoutes.get('/login', checkingExistingUser, (req, res) => {
    res.render('login');
});

viewsRoutes.get('/register', checkingExistingUser, (req, res) => {
    res.render('register');
});

viewsRoutes.get('/fail-login', (req, res) => {
    res.render('fail-login');
})


export default viewsRoutes;