const fs = require('fs');

const escribirYLeerArchivo = () => {

    fs.writeFile('./test_callback.txt', 'Probando fs con callback', 'utf-8', (error) => {
        if(error){
            return console.error('No se pudo escribir el archivo');
        }
        fs.readFile('./test_callback.txt', 'utf-8', (error, data) => {
            if(error){
                return console.error('No se pudo leer');
            }
            console.log(data);
            fs.appendFile('./test_callback.txt', ' Mas datos!', 'utf-8', (error) => {
                if(error){
                    return console.error(error);
                }
                fs.readFile('./test_callback.txt', 'utf-8', (error, data) => {
                    if(error){
                        return console.error('No se pudo leer');
                    }
                    console.log(data);
                    fs.unlink('./test_callback.txt', (err) => {
                        if(err){
                            console.error(err);
                        }
                    })
                })
            });
        });
    });

};

escribirYLeerArchivo();