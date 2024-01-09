import express from 'express';
import userRouter from './routes/user.routes.js';
import mongoose from 'mongoose';
import studentsRoutes from './routes/students.routes.js';
import courseRoutes from './routes/courses.routes.js';

const PORT = 8080;

const app = express();
mongoose.connect('mongodb+srv://fergiraudo91:Luna.2024@coder.3hytpje.mongodb.net/coder');

app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/students', studentsRoutes);
app.use('/api/courses', courseRoutes);

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});