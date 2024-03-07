import express from 'express';
import compression from 'express-compression';
import userRoutes from './routes/user.routes.js';
import { ErrorHandler } from './middleware/error.js';
const PORT = 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(compression({
    brotli: {enabled: true, zlib: {}}
}));

app.get('/longstring', (req, res) => {
    let string = 'Hola coders soy un string ridiculamente largo';
    let repetitions = 1000000;
    for(let i=0; i<repetitions; i++){
        string += ' String muy largooo!';
    }
    res.send({string});
});

app.use('/api/users', userRoutes);
app.use(ErrorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));