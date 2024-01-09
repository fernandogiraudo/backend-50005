import express from 'express';
import userRouter from './routes/users.routes.js';
import mongoose from 'mongoose';
import estudiantesRoutes from './routes/estudiantes.routes.js';

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
mongoose.connect('mongodb+srv://fergiraudo91:Luna.2024@coder.3hytpje.mongodb.net/colegio');
app.use('/api/users', userRouter);
app.use('/api/estudiantes', estudiantesRoutes);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
