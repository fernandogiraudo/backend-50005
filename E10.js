

const saludo = "             Hola Fernando         ";

console.log(saludo);
console.log(saludo.trim());

const arr = [[2,3,4], [9, 10, 11], [[22, [2]]]];

const arrayAplanado = arr.flat(100);

console.log(arrayAplanado);

import('./saludo.mjs').then((result) =>{
    result.saludar();
    result.decirAdios();
});