const fs = require("fs");

const leerYEscribirArchivo = async () => {
    try {
        await fs.promises.writeFile('./promises.txt', 'Probando promesas', 'utf-8');
        let contenido = await fs.promises.readFile('./promises.txt', 'utf-8');
        console.log(contenido);
        await fs.promises.appendFile('./promises.txt', ' Nuevo contenido', 'utf-8');
        contenido = await fs.promises.readFile('./promises.txt', 'utf-8');
        console.log(contenido);
        await fs.promises.unlink('./promises.txt');
    } catch (error) {
        console.error('No se pudo escribir o leer el archivo');
    }
};

leerYEscribirArchivo();
