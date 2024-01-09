import { Router } from "express";
import { studentModel } from "../models/students.model.js";


const studentsRoutes = Router();

studentsRoutes.post('/', async (req, res) => {
    const student = req.body;
    console.log({student});
    try {
        await studentModel.create(student);
        res.status(201).json({message: 'Ok'});
    } catch (error) {
        res.status(400).send({error});
    }
});

studentsRoutes.get('/', async (req, res) => {
    try {
        const students = await studentModel.find();
        res.send({students});
    } catch (error) {
        res.status(400).send({error});
    }
});

studentsRoutes.post('/:sId/:cId', async (req, res) => {
    const { cId, sId } = req.params;
    try {
        const student = await studentModel.findOne({_id: sId});
        student.courses.push({course: cId});
        await studentModel.updateOne({_id: sId}, student);
        res.send({message: 'Ok'});
    } catch (error) {
        res.status(400).send({error});
    }
});

export default studentsRoutes;