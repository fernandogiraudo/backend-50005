import express from 'express';
import petsRoutes from './routes/pet.routes.js';
import UserRouter from './routes/users.routes.js';
import SessionRouter from './routes/session.routes.js';


const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/pets', petsRoutes);

const userRoutes = new UserRouter();

app.use('/api/users', userRoutes.getRouter());
const sessionRouter = new SessionRouter();

app.use('/api/session', sessionRouter.getRouter());

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})