import { getAllToysService, createToyService } from "../services/toys.service.js"

export const getToys = (req, res) => {
    const toys = getAllToysService();
    res.send(toys);
}

export const postToy = (req, res) => {
    const toy = req.body;
    const result = createToyService(toy);
    if(result){
        return res.send(result);
    }
    else{
        return res.status(400).send({message: 'Error'});
    }
}