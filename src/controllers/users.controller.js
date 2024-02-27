import User from "../dao/user.dao.js";

const userService = new User();

export const getUsers = async (req, res) => {
    const users = await userService.getUsers();
    if(!users){
        return res.status(404).send({message: 'Resource not found'});
    }
    res.send({status: 'success', result: users});
}

export const getUserById = async (req, res) => {
    const {uId} = req.params;
    const user = await userService.getUserById(uId);
    if(!user){
        return res.status(404).send({message: 'Resource not found'});
    }
    res.send({status: 'success', result: user});
}

export const saveUser = async (req, res) => {
    const user = req.body;
    const result = await userService.saveUser(user);
    if(!result){
        return res.status(400).send({message: 'Could not create user'});
    }
    res.send({status: 'success', result});
}

export const updateUser = async (req, res) => {
    const user = req.body;
    const {uId} = req.params;
    const result = await userService.updateUser(uId, user);
    if(!result){
        return res.status(400).send({message: 'Could not update user'});
    }
    res.send({status: 'success', result});
}