const promesaHolaMundo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("La promesa se resolvio correctamente");
  }, 1000);
});

// const resolverPromesa = () => {
//   promesaHolaMundo
//     .then((value) => {
//       console.log(value);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => {
//         console.log("Finalizo la promesa");
//     });
//   // console.log(resultado);
// };
const resolverPromesa = async () => {
    try{
        const resultado = await promesaHolaMundo;
        console.log(resultado);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("La promesa terminó");
    }

       // console.log(resultado);
  };


resolverPromesa();

//Object values keys entries

const persona = {
  nombre: "Fernando",
  edad: 32,
  id: 1,
};

const entries = Object.entries(persona);
const keys = Object.keys(persona);
const values = Object.values(persona);

// console.log(entries);
// console.log(keys);
// console.log(values);

//REDUCE

const numeros = [10, 20, 30, 40, 50];

const numeros2 = [60, 70, 80, 90];

const personaO = {
    id: 1,
    nombre: "Fernando"
}

const masDatos = {
    direccion: 'San Lorenzo 23444'
}

const datosPersonaCompleto = {
    ...personaO,
    ...masDatos
}

console.log("DATOS DE PERSONA", datosPersonaCompleto);

const numerosFusionados = [...numeros];
numerosFusionados.push(55);

console.log("FUSIONADOS: ", numerosFusionados);
console.log("NUMEROS: ", numeros);

const promedio = numeros.reduce((acumulador, valorActual, indice, array) => {
    acumulador += valorActual;
    if(indice === array.length - 1){
        return acumulador / array.length;
    }
        return acumulador;
});

const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual);

// console.log(promedio);

// console.log(suma);

const sumaDeNumeros = (numero1, numero2, ...rest) => {
    if(!rest){
        return numero1 + numero2;
    }
    const sumaArr = rest.reduce((acc, current) => acc + current);
    return sumaArr + numero1 + numero2;
}

console.log(sumaDeNumeros(2, 2, 5, 6, 7));