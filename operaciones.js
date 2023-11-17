const sumar = (numero1, numero2) => numero1 + numero2;
const resta = (numero1, numero2) => numero1 - numero2;
const multiplicacion = (numero1, numero2) => numero1 * numero2;
const division = (numero1, numero2) => numero1 / numero2;

const realizarOperacion = (numero1, numero2, operacion) => {
    const resultado = operacion(numero1, numero2);
    return resultado;
}

const sumatoria = realizarOperacion(4, 2, sumar);
console.log(sumatoria);
const restando = realizarOperacion(4, 2, resta);
console.log(restando);
const multiplicando = realizarOperacion(4, 2, multiplicacion);
console.log(multiplicando);
const dividiendo = realizarOperacion(4, 2, division);
console.log(dividiendo);

const potencia = realizarOperacion(3, 2, (numero1, numero2) => numero1 ** numero2  );

console.log(potencia);