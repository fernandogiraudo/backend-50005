
console.log("Empezo el programa");
console.log("Hola mundo");
console.log("Termino el programa");


const saludar = (callback) => {
    setTimeout(() => {
        callback();
    }, 3000);
}

console.log("Empezo el programa");
saludar(() => console.log("Hola mundo"));
console.log("Termino el programa");