import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT = 8080;

let users = [];

app.post('/api/users', (req, res) => {
    const user = req.body;
    const id = users.length + 1;
    users.push({...user, id});
    res.send({status: 'Ok', message: 'Usuario creado'});
});

app.get('/api/users', (req, res) => {
    res.send({users});
});

app.put('/api/users/:id', (req, res) => {
    const {id} = req.params;
    if(!users.some(user => user.id === +id)){
        return res.send({error: 'user not found'});
    }
    const user = req.body;
    users = users.map(u => {
        if(u.id === +id){
            return {
                ...u,
                ...user,
                id: +id
            }
        }
        return u;
    });
    res.send({message: 'user updated', user});
});

app.delete('/api/users/:id', (req, res) => {
    const {id} = req.params;
    if(!users.some(user => user.id === +id)){
        return res.send({error: 'user not found'});
    }
    users = users.filter(u => u.id !== +id);
    res.send({status: 'Ok', message: 'User deleted'});
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});