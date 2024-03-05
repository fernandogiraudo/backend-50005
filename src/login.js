// const login = (user, password) => {
//     if(!password){
//         return 'No password';
//     }
//     if(!user){
//         return 'No user';
//     }
//     if(password !== '123'){
//         return 'wrong password';
//     }
//     if(user !== 'coderUser'){
//         return 'invalid credentials';
//     }
//     if(user === 'coderUser' && password === '123'){
//         return 'logged';
//     }
// }

const login = (user, password) =>
  !user
    ? "No user"
    : !password
    ? "No password"
    : user !== "coderUser" || password !== "123"
    ? "Invalid credentials"
    : "logged";

let testPasados = 0;
let testTotales = 5;

console.log("Test 1: La password no debe estar vacía");
const result1 = login("fergiraudo", "");
if (result1 === "No password") {
  console.log("Test 1 pasado");
  testPasados++;
} else {
  console.log("Test 1 no pasado");
}

console.log("Test 2 El usuario no debe ser vacio");
const result2 = login("", "123");
if (result2 === "No user") {
  console.log("Test 2 pasado");
  testPasados++;
} else {
  console.log("Test 2 no pasado");
}

// console.log("Test 3 La contraseña debe ser 123");
// const result3 = login("coderUser", "258");
// if (result3 === "wrong password") {
//   console.log("Test 3 pasado");
//   testPasados++;
// } else {
//   console.log("Test 3 no ha pasado");
// }

console.log("Test 3: El usuario debe ser coderUser y password debe ser 123");
const result4 = login("fegiraudo", "123");
if (result4 === "Invalid credentials") {
  console.log("Test 4 pasado");
  testPasados++;
} else {
  console.log("Test 4 no pasado");
}

console.log("Test 5: se debe poder loguear correctamente");
const result5 = login("coderUser", "123");
if (result5 === "logged") {
  console.log("Test 5 pasado");
  testPasados++;
} else {
  console.log("Test 5 no pasado");
}
