import express from 'express';
import userRoutes from './routes/user.routes.js';

const PORT = 8080;
const app = express();

app.use('/api/users', userRoutes);
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
