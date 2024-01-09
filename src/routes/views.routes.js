import { Router } from "express";
import { userModel } from "../models/users.model.js";

const viewsRoutes = Router();

viewsRoutes.get('/', async (req, res) => {
    const users = await userModel.find().lean();
    res.render('index', {users});
});

viewsRoutes.get('/add-user', (req, res) => {
    
    res.render('add-user');
});

export default viewsRoutes;