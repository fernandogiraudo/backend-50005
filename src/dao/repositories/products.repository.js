import ProductDTO from "../../dtos/product.dto.js";

export default class ProductRepository {
    constructor(dao){
        this.dao = dao;
    }

    getProducts = () => {
        const result = this.dao.get();
        return result;
    }

    createProduct =  (product) => {
        const newProduct = new ProductDTO(product);
        const result = this.dao.post(newProduct);
        return result;
    }

}