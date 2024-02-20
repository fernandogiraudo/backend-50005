const toys = [];

export const getAllToys = () => {
    return toys;
}

export const createToy = (toy) => {
    toys.push(toy);
    return toy;
}