import { Router } from "express";
import { getUserById, getUsers, saveUser } from "../controllers/users.controller.js";

const userRoutes = Router();

userRoutes.get('/', getUsers);
userRoutes.get('/:uId', getUserById);
userRoutes.post('/', saveUser);

export default userRoutes;