import { Router } from "express";
import { createOrder, getOrderById, getOrders, resolveOrder } from "../controllers/orders.controller.js";

const ordersRoutes = Router();

ordersRoutes.get('/', getOrders);
ordersRoutes.get('/:oId', getOrderById);
ordersRoutes.post('/', createOrder);
ordersRoutes.put('/:oId', resolveOrder);

export default ordersRoutes;