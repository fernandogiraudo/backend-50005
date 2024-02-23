import express from 'express';
import mongoose from 'mongoose';
import contactRoutes from './routes/contacts.routes.js';
import productsRoutes from './routes/products.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/contacts', contactRoutes);
app.use('/api/products', productsRoutes);

app.listen(8080, () => console.log('Listening'));