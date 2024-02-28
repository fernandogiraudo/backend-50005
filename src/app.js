import express from 'express';
import userRoutes from './routes/users.routes.js';
import ordersRoutes from './routes/orders.routes.js';
import businessRoutes from './routes/business.routes.js';
import mongoose from 'mongoose';
import cors from 'cors';

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/business', businessRoutes);

mongoose.connect('mongodb+srv://fergiraudo91:Luna.2024@coder.3hytpje.mongodb.net/coder');


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});