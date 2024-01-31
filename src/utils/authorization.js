export const authorization = (role) => {
    return async (req, res, next) => {
        if(req.user.role !== 'admin'){
            return res.status(403).send({error: 'No permissions'});
        }
        next();
    }
}