let count = 1;


console.log("Empezo el programa");
const intervalo = setInterval(() => {
    console.log(count);
    count++;
    if(count > 5){
        clearInterval(intervalo);
    }
}, 2000);

console.log("Termino el programa");