import express from 'express';
import handlebars from 'express-handlebars';
import session from 'express-session';
import { secret } from './configurations/consts.js';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import viewsRoutes from './routes/views.routes.js';
import sessionRoutes from './routes/session.routes.js';
import initialePassport from './configurations/passport.config.js';
import passport from 'passport';

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

const hbs = handlebars.create({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    }
});

mongoose.connect('mongodb+srv://fergiraudo91:Luna.2024@coder.3hytpje.mongodb.net/coder');

app.engine('handlebars', hbs.engine);
app.set('views', 'src/views');
app.set('view engine', 'handlebars');

app.use(session({
    secret: secret,
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://fergiraudo91:Luna.2024@coder.3hytpje.mongodb.net/coder'
    }),
    resave: true,
    saveUninitialized: true
}));

app.use('/', viewsRoutes);
app.use('/api/session', sessionRoutes);

initialePassport();
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})