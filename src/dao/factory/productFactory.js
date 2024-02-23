
import config from "../../configs/config.js";

let Products;

switch (config.persistence) {
    // case 'MONGO':
    //     const {default : ContactMongo} = await import('../mongo/contacts.mongo.js');
    //     mongoose.connect('mongodb+srv://fergiraudo91:Luna.2024@coder.3hytpje.mongodb.net/coder');
    //     Contacts = ContactMongo;    
    //     break;

    case 'MEMORY':
        const {default : ProductMemory} = await import ('../memory/products.memory.js');
        Products = ProductMemory;
    break;
}

export default Products;