// const sumar = (...nums) => {
//    if(nums.length === 0){
//     return 0;
//    }
//    let validInput = true;
//    for(let i=0; i<nums.length && validInput; i++){
//     if(typeof nums[i] !== 'number'){
//         validInput = false;
//     }
//    }
//    if(!validInput){
//     return null;
//    }
//    let result = 0;
//    for(let i=0; i< nums.length; i++){
//     result += nums[i];
//    }
//    return result;
// }

const sumar = (...nums) => {
    if(!nums.every(num => typeof num === 'number')){
        return null;
    }
    if(nums.length === 0) return 0;
    return nums.reduce((prev, acc) => acc + prev);
}

let testPasados = 0;
let testTotales = 4;

console.log('Test 1: La función deve devolver null si algún parametro no es numerico');

const result1 = sumar("Hola", "Mundo");
if(result1 === null){
    console.log('Test 1 pasado');
    testPasados++;
}
else{
    console.log(`Test 1 no pasado, se recibió ${typeof result1} y se esperaba null`);
}

console.log('Test 2: La función debe devolver 0 sino se pasó ningún parametro');
const result2 = sumar();
if(result2 === 0){
    console.log('Test 2 pasado');
    testPasados++;
}
else {
    console.log(`Test 2 no pasado, se recibió ${result2} pero se esperaba 0`);
}

console.log('Test 3 La función debe resolver la suma correctamente');
const result3 = sumar(2, 3);
if(result3 === 5){
    console.log('Test 3 pasado');
    testPasados++;
}
else{
    console.log(`Test 3 no pasado, se recibió ${result3} y se esperaba 5`);
}

console.log('Test 4: La función debe hacer la suma con cualquier cantidad de numeros');
const result4 = sumar(1, 2, 3, 4);
if(result4 === 10){
    console.log('Test 4 pasado');
    testPasados++;
}
else {
    console.log(`Test 4 no pasado, se recibió ${result4} y se esperaba 10`);
}

if(testPasados === testTotales){
    console.log('Todos los test pasaron');
}
else{
    console.log(`Pasaron ${testPasados} test de un total de ${testTotales}`);
}