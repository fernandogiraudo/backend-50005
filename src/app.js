import express from 'express';
import cookieParser from 'cookie-parser';
import handlebars from 'express-handlebars';
import session from 'express-session';
import { auth } from './middleware/auth.js';

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser('C0d3rh0us3'));
app.use(express.static('public'));

app.use(session({
    secret: 'C0d3rf0us3',
    resave: true,
    saveUninitialized: true
}));

app.get('/session', (req, res) => {
    if(req.session.counter){
        req.session.counter++;
        res.send(`Hola ${req.session.user} Se ha visitado el sitio ${req.session.counter} veces`);
    }
    else{
        req.session.counter = 1;
        res.send('Bienvenido ' + req.session.user);
    }
});

app.get('/actividad', (req, res) => {

});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(!err) res.send({message: 'Logout Ok!'});
        else res.status(400).send({err});
    });
});

app.get('/login', (req, res) => {
    const {userName, password} = req.query;
    if(userName !== 'fergiraudo' || password !== '123'){
        return res.status(401).send({message: 'user or password incorrect'});
    }
    req.session.user = userName;
    req.session.password = password;
    req.session.admin = true;
    res.send({message: 'Login success'});
});

app.engine('handlebars', handlebars.engine());
app.set('views', 'src/views');
app.set('view engine', 'handlebars');

app.get('/', auth, (req, res) => {
    res.render('index');
});

app.get('/setCookie', (req, res) => {
    res.cookie('coderCokie', 'Esto es una cookie!!').send({message: 'Cookie seteada'});
});

app.get('/setSignedCookie', (req, res) => {
    res.cookie('singedCookie', 'Una cookie firmada', {signed: true}).send('Cookie firmada');
});

app.get('/getSignedCookie', (req, res) => {
    res.send(req.signedCookies);
});

app.get('/products', auth, (req, res) => {
    const cookies = req.cookies;
    if(!cookies.coderCokie){
        return res.send({message: 'Iniciar sesion'});
    }
    else{
        res.send({message: 'Sesion iniciada'});
    }
});

app.post('/createCookie', (req, res) => {
    const {nombre, correo} = req.body;
    res.cookie('user', correo, {maxAge: 10000}).send({message: 'Cookie seteada'});
});

app.get('/getCookies', (req, res) => {
    res.send(req.cookies);
});

app.get('/deleteCookies', (req, res) => {
    res.clearCookie('coderCokie').send({message: 'Cookies borradas'});
});


app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});
