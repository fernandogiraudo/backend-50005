import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/users.routes.js';
import handlebars from 'express-handlebars';
import viewsRoutes from './routes/views.routes.js';
import studentRoutes from './routes/student.routes.js';
import courseRoute from './routes/course.routes.js';

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.engine('handlebars', handlebars.engine());
app.set('views', 'src/views');
app.set('view engine', 'handlebars');

mongoose.connect('mongodb+srv://fergiraudo91:Luna.2024@coder.3hytpje.mongodb.net/coderpopulation');

app.use('/api/users', userRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoute);
app.use('/', viewsRoutes);

app.listen(PORT, () => {
    console.log(`Listenng on PORT ${PORT}`);
});