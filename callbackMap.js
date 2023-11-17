const numeros = [1, 2, 3, 4, 5];

const duplicacion = numeros.map((numero) => {
    return numero * 2;
});


function triplicar(numero){
    return numero * 3;
}

const triplicacion = numeros.map(triplicar);

console.log(triplicacion);

const miMap = (numeros, callback) => {
    const array = [];
    for(const numero of numeros){
        const resultado = callback(numero);
        array.push(resultado);
    }
    return array;
}

const division = miMap(numeros, (valor) => valor / 2);

console.log("---division--");
console.log(division);

Array.prototype.MiMap = function (callback) {
    console.log("___THIS___");
    console.log(this);
    const array = [];
    for(let i=0; i < this.length; i++){
        const resultado = callback(this[i]);
        array.push(resultado);
    }
    return array;
}

const suma = numeros.MiMap((numero) => numero + 2 );
console.log(suma);