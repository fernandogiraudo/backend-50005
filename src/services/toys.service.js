import { createToy, getAllToys } from "../persistence/toy.persistence.js"

export const getAllToysService = () => {
    return getAllToys();
}

export const createToyService = (toy) => {
    const result = createToy(toy);
    if(!result){
        return false;
    }
    return true;
}