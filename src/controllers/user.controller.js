import { getAllUsersService, createUserService } from "../services/users.service.js";

export const getUsers = (req, res) => {
    const users = getAllUsersService();
    res.send(users);
};

export const postUser = (req, res) => {
    const user = req.body;
    const result = createUserService(user);
    res.send(result);
};