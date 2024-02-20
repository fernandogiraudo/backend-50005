const peticion = async () => {
    const result = await fetch('http://localhost:8080/test');
    const information = await result.json();
    console.log(information);
}