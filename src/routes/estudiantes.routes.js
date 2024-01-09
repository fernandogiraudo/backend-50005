import { Router } from "express";
import { estudianteModel } from "../models/estudiante.model.js";

const estudiantesRoutes = Router();

estudiantesRoutes.get('/', async (req, res) => {
    try {
        const estudiantes = await estudianteModel.find();
        res.send({estudiantes});
    } catch (error) {
        res.status(400).json({message: 'Users not found'});
    }
});

estudiantesRoutes.post('/', async (req, res) => {
    const newStudent = req.body;
    try {
        await estudianteModel.create(newStudent);
        res.send({message: 'User added'});
    } catch (error) {
        console.error(error);
        res.status(400).json({message: 'could not add user'});
    }
});

estudiantesRoutes.put('/:eId', async (req, res) => {
    const { eId } = req.params;
    const updatedStudent = req.body;
    try {
        const update = await estudianteModel.updateOne({_id: eId}, updatedStudent);
        if(!update.modifiedCount){
            return res.status(400).json({message: 'Could not update user'});
        }
        res.send({message: 'User updated'});
    } catch (error) {
        console.error(error);
        res.status(400).json({message: 'Could not update user'});
    }
});

estudiantesRoutes.delete('/:eId', async (req, res) => {
    const { eId } = req.params;
    try {
        await estudianteModel.deleteOne({_id : eId});
        res.send({message: 'User deleted'});
    } catch (error) {
        console.error(error);
        res.status(400).send({message: 'Could not delete user'});
    }
});

export default estudiantesRoutes;