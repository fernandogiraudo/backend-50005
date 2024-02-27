import { Router } from "express";
import { getUserById, getUsers, saveUser, updateUser } from "../controllers/users.controller.js";

const userRoutes = Router();

userRoutes.get('/', getUsers);
userRoutes.get('/:uId', getUserById);
userRoutes.post('/', saveUser);
userRoutes.put('/:uId', updateUser)

export default userRoutes;