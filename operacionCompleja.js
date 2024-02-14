function operacionCompleja(){
    let suma = 0;
    for(let i=0; i < 5e10; i++){
        suma += i;
    }
    return suma;
}

process.on('message', (msg) => {
    if(msg === 'start'){
        const resultado = operacionCompleja();
        process.send(resultado);
    }
})