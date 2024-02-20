import { getAllUsers, createUser } from "../persistence/users.persistence.js"

export const getAllUsersService = () => {
    return getAllUsers();
}

export const createUserService = (user) => {
    return createUser(user);
}