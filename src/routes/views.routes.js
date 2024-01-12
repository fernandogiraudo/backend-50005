import { Router } from "express";
import { userModel } from "../model/users.model.js";

const viewsRoutes = Router();

viewsRoutes.get('/', (req, res) => {
    res.render('index');
});

viewsRoutes.get('/students', async (req, res) => {
    const { page } = req.query;
    const data = await userModel.paginate({}, {limit: 20, page: page});
    data.prevLink = `/students?page=${+page - 1}`;
    data.nextLink = `/students?page=${+page + 1}`;
    console.log({data});
    res.render('students', {data});
});

export default viewsRoutes;