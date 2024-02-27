import { Router } from "express";
import { addProduct, createBusiness, getBusiness, getBusinessById } from "../controllers/business.controller.js";

const businessRoutes = Router();

businessRoutes.get('/', getBusiness);
businessRoutes.get('/:bId', getBusinessById);
businessRoutes.post('/', createBusiness);
businessRoutes.post('/:bId/:productId', addProduct);

export default businessRoutes;