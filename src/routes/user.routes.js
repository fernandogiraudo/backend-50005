import { Router } from "express";
import { userModel } from "../models/user.model.js";

const userRouter = Router();

userRouter.get('/', async (req, res) => {
    try {
        const users = await userModel.find({first_name: {$regex: 'Dani', $options: 'i'}})
        res.status(200).json({users});
    } catch (error) {
       res.status(400).send({error}); 
    }
});

export default userRouter;