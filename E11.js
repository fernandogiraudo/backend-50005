//Operadores de cortocircuito || ?? &&

//|| -> falsy values - null, undefined, false, 0 '', NaN

// && muestra la primera expresion que sea falsy value - false, undefined, etc

// const nombre = false;
// const nombre2 = "Fernando";
// const nombre3 = "Marcos";

// console.log("NULLISH: ");
// console.log(nombre ?? nombre2);
// console.log("OR: || ");
// console.log(nombre || nombre2);
// console.log("AND &&: ");
// console.log(nombre2 && nombre);

class Persona {
    #nombre;
    constructor(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }
}

const persona1 = new Persona("Fernando");
persona1.nombre = "Fernando Giraudo";

console.log(persona1.getNombre());