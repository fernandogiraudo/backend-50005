import { Router as ExpressRouter } from "express";
import jwt from 'jsonwebtoken';

export class Router {
    constructor(){
        this.router = ExpressRouter();
        this.init();
    }

    applyCallbacks(callbacks){
        return callbacks.map((callback) => async (...params) => {
            try {
                await callback.apply(this, params);
            } catch (error) {
                console.log(error);
                params[1].status(500).send(error);
            }
        })
    }
    handlePolicies = policies => (req, res, next) => {
        if(policies.find(p => p === 'PUBLIC')){
            return next();
        }
        const authHeaders = req.headers.authorization;
        const token = authHeaders.split(' ')[1];
        const user = jwt.verify(token, 'C0d3rh0us3');
        if(!policies.includes(user.role.toUpperCase())){
            return res.status(403).send({error: 'Forbidden'});
        }
        req.user = user;
        next();
    }

    getRouter(){
        return this.router;
    }

    init(){}
    
    get(path, polices, ...callbacks){
        this.router.get(path, this.handlePolicies(polices), this.generateCustomResponses, this.applyCallbacks(callbacks))
    }

    post(path, polices, ...callbacks){
        this.router.post(path, this.handlePolicies(polices), this.generateCustomResponses, this.applyCallbacks(callbacks))
    }
    
    put(path, ...callbacks){
        this.router.put(path, this.generateCustomResponses, this.applyCallbacks(callbacks))
    }

    delete(path, ...callbacks){
        this.router.delete(path, this.generateCustomResponses, this.applyCallbacks(callbacks))
    }

    generateCustomResponses(req, res, next){
        res.sendSuccess = payload => res.send({status: 'success', payload});
        res.sendServerError = error => res.status(500).send({status: 'error', error});
        res.sendUserError = error => res.status(400).send({status: 'error', error});
        next();
    }
}