const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
];

// Dados los objetos indicados en la siguiente diapositiva:
// Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
// Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)

const productosArr = objetos.map(objeto => {
    return Object.keys(objeto);
}).flat();

const productosSinRepetir = [];

for(const producto of productosArr){
    if(!productosSinRepetir.includes(producto)){
        productosSinRepetir.push(producto);
    }
}

// console.log(productosSinRepetir);

const valuesArr = objetos.map(objeto => {
    return Object.values(objeto);
});

const sumatoria = valuesArr.flat().reduce((acc, current) => acc + current);

console.log(sumatoria);