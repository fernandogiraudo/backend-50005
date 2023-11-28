import express from 'express';
import ProductManager from './ProductManager.js';

const productManager = new ProductManager('./products.json');
const PORT = 8080;
const app = express();
app.use(express.urlencoded({extended: true}));


app.get('/saludo', (req, res) => {
    res.send('Hola mundo desde saludo!');
});

const user = {
    name: 'Fernando',
    lastName: 'Giraudo',
    age: 32,
    mail: 'fergiraudo@gmail.com'
}

const users = [
    {
        id: 1,
        name: 'Fernando',
        lastName: 'Giraudo',
        age: 32,
        mail: 'fergiraudo@gmail.com',
        gender: 'M'
    },
    {
        id: 2,
        name: 'Sergio',
        lastName: 'Sosa',
        age: 28,
        mail: 'sersosa@gmail.com',
        gender: 'M'
    },
    {
        id: 3,
        name: 'Magali',
        lastName: 'Rojo',
        age: 36,
        mail: 'maga@gmail.com',
        gender: 'F'
    },
    {
        id: 4,
        name: 'Karen',
        lastName: 'Gonzalez',
        age: 35,
        mail: 'carengon@gmail.com',
        gender: 'F'
    },
    {
        id: 4,
        name: 'Alien',
        lastName: '2',
        age: 35,
        mail: 'carengon@gmail.com',
        gender: 'X'
    }
];

app.get('/bienvenida', async (req, res) => {
    const users = await productManager.getProducts();
    res.send('<h1 style="color:blue">Bienvenidos!</h1>')
});

app.get('/user', (req, res) => {
    res.send(user);
});

// app.get('/users', (req, res) => {
//     res.send(users);
// });

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(u => u.id === parseInt(id));
    if(!user){
        res.send({error: 'user not found'});
    }
    res.send(user);
});

app.get('/users', (req, res) => {
   const {gender} = req.query;
   if(!gender){
    return res.send({users});
   }
   if(gender.toUpperCase() !== 'F' && gender.toUpperCase() !== 'M' && gender.toUpperCase() !== 'X'){
    return res.send({error: 'Genero inexistente'});
   }
   const filteredUsers = users.filter(u => u.gender === gender.toUpperCase());
   res.send(filteredUsers);

});


app.get('/products', async (req, res) => {
    const {limit} = req.query;
    if(!limit){
        return res.send(products);
    }
    const products = await productManager.getProducts();
});

app.get('/products/:id', async (req, res) => {
    const {id} = req.params;
    const products = await productManager.getProductByid(id);
    res.send(products);
});



app.get('/user-param/:name/:lastName', (req, res) => {
    const { name, lastName } = req.params;
    res.send(`Hola ${name} ${lastName}`);

});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en puerto ${PORT}`);
});