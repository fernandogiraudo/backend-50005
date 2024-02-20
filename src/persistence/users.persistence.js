const users = [];

export const getAllUsers = () => {
    return users;
}

export const createUser = (user) => {
    users.push(user);
    return user;
}