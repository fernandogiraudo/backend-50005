const numArr = [];

for(let i=0; i<10000; i++){
    const numeroAleatorio = Math.floor(Math.random() * 20 + 1);
    numArr.push(numeroAleatorio);
}

const objectNum = {};

for(const numero of numArr){
    objectNum[numero] = (objectNum[numero] || 0) + 1;
}

console.log(objectNum);
