

// const resultado = dividir(4, 2)
//     .then(result => {
//         if(result < 0){
//             console.log("La operacion es negativa");
//         }
//         else{
//             console.log(result);
//         }
//     })
//     .catch(err => console.log(err));

// dividir(4, 0)
//     .then(result => console.log(result))
//     .catch(err => console.log(err));

//     console.log(resultado);

const dividir = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if(numero2 === 0){
            reject("No se puede dividir por 0");
        }
        else{
            resolve(numero1 / numero2);
        }
    });
};


const realizarOperacion = async () => {
    try {
        const resultado1 = await dividir(4, 2);
        console.log(resultado1);
        const resultado2 = await dividir(4, 0);
        console.log(resultado2);
    } catch (error) {
        console.error(error);
    }
    finally{
        console.log("Se terminó la operación");
    }
}

realizarOperacion();