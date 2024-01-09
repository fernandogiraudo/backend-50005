import { Router } from "express";
import { courseModel } from "../models/course.model.js";

const courseRoutes = Router();

courseRoutes.post('/', async (req, res) => {
    const course = req.body;
    try {
        await courseModel.create(course);
        res.send({message: 'Ok'});
    } catch (error) {
        res.status(400).send({error});
    }
});


export default courseRoutes;