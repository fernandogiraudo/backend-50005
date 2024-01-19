import MongoStore from 'connect-mongo';
import express from 'express';
import session from 'express-session';
import FileStore from 'session-file-store';
import handlebars from 'express-handlebars';
import sessionRoutes from './routes/session.routes.js';
import mongoose from 'mongoose';
import viewRoutes from './routes/views.routes.js';

const PORT = 8080;
const fileStore = FileStore(session);
const app = express();

app.use(session({
    secret: 'C0d3rh0us3',
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://fergiraudo91:Luna.2024@coder.3hytpje.mongodb.net/coder',
    }),
    resave: true,
    saveUninitialized: true
}));

mongoose.connect('mongodb+srv://fergiraudo91:Luna.2024@coder.3hytpje.mongodb.net/coder');

const hbs = handlebars.create({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    }
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));
app.engine('handlebars', hbs.engine);
app.set('views', 'src/views');
app.set('view engine', 'handlebars');

app.use('/api/session', sessionRoutes);

app.use('/', viewRoutes);

app.listen(PORT, () => {
    console.log(`Listenig on PORT ${PORT}`);
});