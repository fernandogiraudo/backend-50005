import express from 'express';
import handlebars from 'express-handlebars';
import userRoutes from './router/users.routes.js';
import viewsRoutes from './router/views.routes.js';

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.engine('handlebars', handlebars.engine());
app.set('views', 'src/views');
app.set('view engine', 'handlebars');
app.use('/', viewsRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});