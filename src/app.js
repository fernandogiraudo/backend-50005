import express from 'express';
import userRoutes from './routes/users.routes.js';
import ordersRoutes from './routes/orders.routes.js';
import businessRoutes from './routes/business.routes.js';

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users', userRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/business', businessRoutes);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});