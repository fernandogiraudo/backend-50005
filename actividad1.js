// Realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual. 
// Posteriormente leer el archivo y mostrar el contenido por consola. 
// Utilizar el módulo fs y sus operaciones de tipo callback.

const fs = require('fs');

const fecha = new Date();

fs.writeFile('./hora.txt', fecha.toLocaleString(), 'utf-8', (error) => {
    if(error){
        return console.log(error);
    }
});

fs.readFile('./hora.txt', 'utf-8', (error, data) => {
    if(error){
        return console.log(error);
    }
    console.log(data);
});