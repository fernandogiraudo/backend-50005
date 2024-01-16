export const auth = (req, res, next) => {
    const session = req.session;
    console.log({session});
    if(req.session?.user === 'fergiraudo' && req.session?.password === '123'){
        return next();
    }
    res.status(401).send({message: 'Unauthorized'});
}