const watchOrders = async () => {
    const result = await fetch('http://localhost:8080/api/orders');
    const data = await result.json();
    console.log({orders: data.result});
}

const renderOrders = async () => {
    const result = await fetch('http://localhost:8080/api/orders');
    const data = await result.json();
    const fragment = document.createDocumentFragment();
    data.result.forEach(order => {
        const div = document.createElement('div');
        const priceP = document.createElement('p');
        const statusP = document.createElement('p');
        const numberP = document.createElement('p');
        priceP.innerHTML = `Total de la orden: $${order.totalPrice}`;
        statusP.innerHTML = `Estado: ${order.status}`;
        numberP.innerHTML = `Numero de orden: ${order.number}`;
        const br = document.createElement('br');
        div.appendChild(numberP);
        div.appendChild(priceP);
        div.appendChild(statusP);
        div.appendChild(br);
        div.appendChild(br);
        fragment.appendChild(div);
    });
    const orderContainer = document.getElementById('orders');
    orderContainer.appendChild(fragment);
}

watchOrders();

renderOrders();

