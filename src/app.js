import express from 'express';
import dotenv from 'dotenv';
import { addLogger } from './utils/logger.js';

dotenv.config();
const PORT = 8080;

const app = express();

app.use(addLogger);
app.get('/holamundo', (req, res) => {
    res.send({message: 'Prueba!'});
})
app.get('/verlogs', (req, res) => {
    req.logger.info('Hola soy un log de info');
    req.logger.warning('Esto es un warning');
    req.logger.error('Esto es un error');
    req.logger.fatal('Esto es un error FATAL');
    req.logger.debug('Esto es un debug');
    res.send({message: 'Error de prueba!'});
});

app.get('/operacionsencilla', (req, res) => {
    let sum = 0;
    for(let i=0; i<100000; i++){
        sum+=i;
    }
    res.send({sum});
});

app.get('/operacioncompleja', (req, res) => {
    let sum = 0;
    for(let i=0; i<5e8; i++){
        sum+=i;
    }
    res.send({sum});
})

app.listen(PORT, () => console.log('Listeing on 8080'));