import { Router } from "express";
import { getToys, postToy } from "../controllers/toys.controller.js";

const toysRoutes = Router();

toysRoutes.get('/', getToys);

toysRoutes.post('/', postToy);

export default toysRoutes;