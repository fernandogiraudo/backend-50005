export default class Products {
    constructor(){
        this.products = [];
    }

    get = () => {
        return this.products;
    }

    post = (product) => {
        this.products.push(product);
        return true;
    }
}