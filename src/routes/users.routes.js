import { Router } from "express";
import { userModel } from "../models/users.model.js";
import { uploader } from "../utils/multer.js";

const userRoutes = Router();

userRoutes.get('/', async (req, res) => {
    const { gender } = req.query;
    try {
        let users = [];
        if(gender){ 
            users = await userModel.find({gender: gender});
        }
        else{
            users = await userModel.find().explain('executionStats');
        }
        res.send({users});
    } catch (error) {
        console.error(error);
        res.status(400).json({message: 'Something went wrong'});
    }
});

userRoutes.get('/:uId', async (req, res) => {
    const { uId } = req.params;
    try {
        const user = await userModel.findOne({_id: uId});
        if(!user){
            return res.status(404).json({message: 'User not found'});
        }
        res.send({user});
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});

userRoutes.post('/', uploader.single('file'), async (req, res) => {
    try {
        const newUser = req.body;
        const path = req.file.path.split('public').join('');
        const added = await userModel.create({...newUser, imagePath: path});
        res.status(201).json({message: 'User added'});
    } catch (error) {
        console.error({error});
        if(error.errors){
            return res.status(400).json({errors: error.errors});
        }
        res.status(400).json({error});
    }
});

userRoutes.delete('/:uId', async (req, res) => {
    const { uId } = req.params;
    try {
        const userDeleted = await userModel.deleteOne({_id: uId});
        if(userDeleted.deletedCount > 0){
            return res.send({message: 'User deleted'});
        }
        res.status(404).json({message: 'User not found'});
    } catch (error) {
        console.error(error);
        res.status(400).send({error});
    }
});

userRoutes.put('/:uId', async (req, res) => {
    const { uId } = req.params;
    const userToUpdate = req.body;
    try {
        const update = await userModel.updateOne({_id: uId}, userToUpdate);
        if(update.modifiedCount > 0){
            return res.send({message: 'User updated'});
        }
        res.status(404).json({message: 'User not found'});
    } catch (error) {
        console.error(error);
        res.status(400).send({error});
    }
});

export default userRoutes;