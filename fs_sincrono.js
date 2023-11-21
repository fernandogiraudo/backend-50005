const fs = require('fs');

const escribirYLeerArchivo = () => {
    fs.writeFileSync('./prueba.txt', 'Hola mundo', 'utf-8');
    let contenido = fs.readFileSync('./prueba.txt', 'utf-8');
    console.log(contenido);
    fs.appendFileSync('./prueba.txt', ' Mas contenido...!', 'utf-8');
    contenido = fs.readFileSync('./prueba.txt', 'utf-8');
    console.log(contenido);
    fs.unlinkSync('./prueba.txt');
};

escribirYLeerArchivo();