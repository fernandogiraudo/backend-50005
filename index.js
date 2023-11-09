// let nombre = "Fernando";
// let edad = 32;
// let esMayorDeEdad = true;

// let personas = [{
//     nombre: 'Fernando',
//     edad: 32,
//     fechaNacimiento : '21-03-1991'
// },
// {
//     nombre: 'Sergio',
//     edad: 36,
//     fechaNacimiento : '21-03-1991'
// }
// ]

// console.log(typeof function(){})

//Ejemplo let y const mutabilidad

// const persona = {nombre: 'Fernando', edad: 32};

// persona.nombre = 'Marcos';

// console.log(persona);

// const numeros = [1, 2, 3, 4, 5];

// numeros[4] = 10;

// console.log(numeros);

// function saludar(nombre, edad){
//     console.log("Hola como estas " + nombre + " usted tiene " + edad + " años");
// }

// const saludar2 = nombre => "Hola como estas " + nombre;


// saludar("Fernando", 32);

// console.log(saludar2("Marcos"));

// Cómo lo hacemos? Definiremos la función “mostrarLista”, la cual recibirá un arreglo con elementos como parámetro.

// Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
// Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso devolviendo la longitud de la lista (Utilizar template strings)
// Invocar la función con los casos de prueba.

// const mostrarLista = arreglo => {
//     if(arreglo.length === 0){
//         return console.log("La lista está vacía");
//     }

//     for(const item of arreglo){
//         console.log(item);
//     }

//     console.log(`La longitud de la lista es ${arreglo.length}`);
// }

// const arreglo1 = [1, 2, 3, 4, 5];
// const arreglo2 = [];
// const arreglo3 = [5, 10];

// mostrarLista(arreglo1);
// mostrarLista(arreglo2);
// mostrarLista(arreglo3);


//Clases

class Persona {
    constructor(nombre){
        this.nombre = nombre;
    }

    static especie = "Humana";

    saludar(){
        console.log(`Hola ${this.nombre}`);
    }

    getEspecie(){
        console.log(`La especie es ${Persona.especie}`);
    }
}

const persona1 = new Persona("Fernando");
const persona2 = new Persona("Marcos");

persona1.saludar();
persona2.saludar();

persona1.getEspecie();
