import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let frase = 'Frase inicial';

app.get('/api/frase', (req, res) => {
    res.send({frase});
});

app.get('/api/palabra/:pos', (req, res) => {
    const {pos} = req.params;
    const fraseArr = frase.split(' ');
    if(fraseArr.length < pos){
        return res.send({error: 'Palabra inexistente'});
    }
    res.send(fraseArr[pos - 1]);
});

app.post('/api/palabra', (req, res) => {
    const { palabra } = req.body;
    const fraseArr = frase.split(' ');
    fraseArr.push(palabra);
    frase = fraseArr.join(' ');
    res.send({agregada: palabra, pos: fraseArr.length});
});

app.put('/api/palabra/:pos', (req, res) => {
    const {pos} = req.params;
    const fraseArr = frase.split(' ');
    if(fraseArr.length < pos){
        return res.send({error: 'Palabra inexistente'});
    }
    const { palabra } = req.body;
    const anterior = fraseArr[pos - 1];
    fraseArr[pos - 1] = palabra;
    frase = fraseArr.join(' ');
    res.send({anterior, actualizada: palabra});
 });

 app.delete('/api/palabra/:pos', (req, res) => {
    const {pos} = req.params;
    let fraseArr = frase.split(' ');
    console.log(fraseArr);
    fraseArr.splice(pos - 1, 1);
    frase = fraseArr.join(' ');
    res.send({messahe: 'deleted'});
 });

app.listen(8080, () => {
    console.log('Escuchando en 8080');
})