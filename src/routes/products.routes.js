import { Router } from "express";
import { productsService } from "../dao/repositories/index.js";

const productsRoutes = Router();

productsRoutes.get('/', (req, res) => {
    const products =  productsService.getProducts();
    res.send({products});
});

productsRoutes.post('/', (req, res) => {
    const product = req.body;
    const result = productsService.createProduct(product);
    if(result){
        return res.status(201).send({message: 'Ok'});
    }
    res.status(400).send({message: 'Error'});
});

export default productsRoutes;