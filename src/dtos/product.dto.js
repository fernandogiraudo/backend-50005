class ProductDTO {
    constructor(product){
        this.name = product.name;
        this.price = product.price;
        this.description = product.description;
        this.active = true;
    }
}

export default ProductDTO;