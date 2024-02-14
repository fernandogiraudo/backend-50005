import express from 'express';
import { fork } from 'child_process';

const app = express();

let visits = 0;

const sumar = () => {
    let suma = 0;
    for(let i=0; i < 5e9; i++){
        suma += i;
    }
    return suma;
}

app.get('/', (req, res) => {
    visits++;
    res.send({visitas: visits});
})

app.get('/bloqueante', (req, res) => {
    const suma = sumar();
    res.send({suma});
});

app.get('/no-bloqueante', (req, res) => {
    const computo = fork('./operacionCompleja.js');
    computo.send('start');
    computo.on('message', suma => {
        res.send({suma});
    })
})

app.listen(8080, () => {
    console.log('Listening 8080');
})