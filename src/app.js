import express from 'express';
import passport from 'passport';
import sessionRoutes from './routes/session.routes.js';
import cookieParser from 'cookie-parser';
import initializePassPort from './config/passport.config.js';

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
initializePassPort();
app.use(passport.initialize());
app.use(cookieParser());
app.use('/api/session', sessionRoutes);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});