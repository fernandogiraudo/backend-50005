import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({origin: 'http://127.0.0.1:5500'}));

app.get('/test', (req, res) => {
    res.send({message: 'Probando'});
});

app.listen(8080, () => {console.log('Listening')});