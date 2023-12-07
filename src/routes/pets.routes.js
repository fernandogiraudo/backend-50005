import { Router } from 'express';
import { uploader } from '../utils/multer.js';

const petsRouter = Router();

const pets = [];

petsRouter.get('/', (req, res) => {
    res.send(pets);
});

petsRouter.post('/', uploader.single('file'), (req, res) => {
    const pet = req.body;
    const path = req.file.path.split('public').join('');

    pets.push({...pet, thumbnail: path});
    res.send({message: 'pet added'});
});

export default petsRouter;