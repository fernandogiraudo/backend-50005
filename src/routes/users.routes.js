import { Router } from "express";
import { getUsers, postUser } from "../controllers/user.controller.js";

const userRoutes = Router();

userRoutes.get("/", getUsers);

userRoutes.post("/", postUser);

export default userRoutes;
