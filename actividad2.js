// Escribir un programa ejecutable bajo node.js que realice las siguientes acciones:
// Abra una terminal en el directorio del archivo y ejecute la instrucción: npm init -y.
// Esto creará un archivo especial (lo veremos más adelante) de nombre package.json
// Lea el archivo package.json y declare un objeto con el siguiente formato y datos:
// const info = {
//     contenidoStr: (contenido del archivo leído en formato string),
//     contenidoObj: (contenido del archivo leído en formato objeto),
//     size: (tamaño en bytes del archivo)
// // }

// Muestre por consola el objeto info luego de leer el archivo
// Guardar el objeto info en un archivo llamado info.json dentro de la misma carpeta de package.json
// Incluir el manejo de errores (con throw new Error)
// Utilizar el módulo promises de fs dentro de una función async/await y utilizar JSON.stringify + 
// JSON.parse para poder hacer las transformaciones json->objeto y viceversa

const fs = require('fs');

const info = {
    contenidoStr: '',
    contenidoObj: {},
    size: 0
}

const leerYEscribirArchivo = async () => {
    const data = await fs.promises.readFile('./package.json', 'utf-8');
    info.contenidoStr = data.toString();
    const object = JSON.parse(data);
    info.contenidoObj = object;
    const status = await fs.promises.stat('./package.json');
    const size = await status.size;
    info.size = size;
    console.log({info});
    await fs.promises.writeFile('./info.json', JSON.stringify(info), 'utf-8');
};

leerYEscribirArchivo();