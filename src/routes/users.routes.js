import { Router } from "express";
import { userModel } from "../models/user.model.js";


const userRouter = Router();

userRouter.get('/', async (req, res) =>{
    try {
        const users = await userModel.find();
        res.status(200).json({users});
    } catch (error) {
        console.error(error);
        res.status(400).json({message: 'users not found'});
    }
});

userRouter.post('/', async (req, res) => {
    const { first_name, last_name, email } = req.body;
    if(!first_name || !last_name || !email){
        return res.status(400).json({message: 'User incomplete'});
    }

    try {
        await userModel.create({first_name, last_name, email});
        res.status(201).json({message: 'User created'});
    } catch (error) {
        console.error(error);
        res.status(400).json({message: 'Could not create a user'});
    }
});

userRouter.put('/:userId', async (req, res) => {
    const { userId } = req.params;
    const updatedUser = req.body;
    try {
        await userModel.updateOne({_id: userId}, updatedUser);
        res.status(200).json({message: 'user updated'});
    } catch (error) {
        console.error(error);
        res.status(400).json({message: 'could not update user'});
    }
});

userRouter.delete('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const deleted = await userModel.deleteOne({_id : userId});
        if(!deleted.deletedCount){
            return res.status(404).json({message: 'User not found'});
        }
        res.status(200).json({message: 'User deleted'});
    } catch (error) {
        console.error(error);
        res.status(400).json({message: 'could not delete user'});
    }
});


export default userRouter;