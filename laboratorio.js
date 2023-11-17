// ¿Cómo lo hacemos? Se crearán un conjunto de funciones gestionadas por promesas y un entorno ASÍNCRONO
// donde podremos ponerlas a prueba
// Definir función suma:
// Debe devolver una promesa que se resuelva siempre que ninguno de los dos sumandos sea 0
// En caso de que algún sumando sea 0, rechazar la promesa indicando “Operación innecesaria”.
// En caso de que la suma sea negativa, rechazar la promesa indicando “La calculadora sólo debe devolver
// valores positivos
// Definir función resta:
// Debe devolver una promesa que se resuelva siempre que ninguno de los dos valores sea 0
// En caso de que el minuendo o sustraendo sea 0, rechazar la promesa indicando “Operación inválida
// En caso de que el valor de la resta sea menor que 0, rechazar la promesa indicando “La calculadora sólo puede devolver valores positivos”

// Definir una función multiplicación:
// Debe devolver una promesa que se resuelva siempre que ninguno de los dos factores sea negativo
// Si el producto es negativo, rechazar la oferta indicando “La calculadora sólo puede devolver valores positivos
// Definir la misma función división utilizada en esta clase.
// Definir una función asíncrona “cálculos”, y realizar pruebas utilizando async/await y try/catch

const suma = (numero1, numero2) => {
  return new Promise((resolve, reject) => {
    if (numero1 === 0 || numero2 === 0) {
      reject("Operación innecesaria");
    }
    const sumatoria = numero1 + numero2;
    if (sumatoria < 0) {
      reject("La calculadora sólo debe devolver valores positivos");
    }
    resolve(sumatoria);
  });
};

const resta = (numero1, numero2) => {
  return new Promise((resolve, reject) => {
    if (numero1 === 0 || numero2 === 0) {
      reject("Operación innecesaria");
    }
    const operacionResta = numero1 - numero2;
    if (operacionResta < 0) {
      reject("La calculadora sólo debe devolver valores positivos");
    }
    resolve(operacionResta);
  });
};

const multiplicacion = (numero1, numero2) => {
  return new Promise((resolve, reject) => {
    if (numero1 < 0 || numero2 < 0) {
      reject("Operación innecesaria");
    }
    const resultado = numero1 * numero2;
    if (resultado <= 0) {
      reject("La calculadora sólo debe devolver valores positivos");
    }
    resolve(resultado);
  });
};

const dividir = (numero1, numero2) => {
  return new Promise((resolve, reject) => {
    if (numero2 === 0) {
      reject("No se puede dividir por 0");
    } else {
      resolve(numero1 / numero2);
    }
  });
};

const calculos = async () => {
  try {
    const resultadoSuma = await suma(4, 4);
    console.log(resultadoSuma);
  } catch (error) {
    console.log(error);
  }
  try {
    const resultadoResta = await resta(4, 2);
    console.log(resultadoResta);
  } catch (error) {
    console.log(error);
  }
  try {
    const resultadoResta = await resta(4, 0);
    console.log(resultadoResta);
  } catch (error) {
    console.log(error);
  }
  try {
    const resultadoResta = await multiplicacion(4, 2);
    console.log(resultadoResta);
  } catch (error) {
    console.log(error);
  }
  try {
    const resultadoResta = await multiplicacion(4, 0);
    console.log(resultadoResta);
  } catch (error) {
    console.log(error);
  }
  try {
    const resultadoResta = await dividir(4, 2);
    console.log(resultadoResta);
  } catch (error) {
    console.log(error);
  }
  try {
    const resultadoResta = await dividir(4, 0);
    console.log(resultadoResta);
  } catch (error) {
    console.log(error);
  }
};

calculos();