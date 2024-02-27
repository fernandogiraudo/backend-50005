export const getUsers = async (req, res) => {
    res.send({status: 'success', result: 'getUsers'});
}

export const getUserById = async (req, res) => {
    res.send({status: 'success', result: 'getUserById'});
}

export const saveUser = async (req, res) => {
    res.send({status: 'success', result: 'saveUser'});
}

export const updateUser = async (req, res) => {
    res.send({status: 'success', result: 'updateUser'});
}