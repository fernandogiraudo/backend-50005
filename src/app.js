import express from 'express';
import userRoutes from './routes/users.routes.js';
import petsRouter from './routes/pets.routes.js';

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use((req, res, next) => {
    const date = new Date();
    console.log(`Fecha: ${date.toISOString()}`);
    next();
})

app.use('/api/users', (req, res, next) => {
    console.log('Entre a la ruta')
    next();
}, userRoutes);
app.use('/api/pets', petsRouter);


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});