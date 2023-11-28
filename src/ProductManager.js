class ProductManager {
    constructor(path){
        this.path = path;
    }

    async getProducts(){
        return [{
            name: 'Fernando'
        }];
    }
} 

export default ProductManager;