
import Conctacts from "../factory/factory.js";
import Products from "../factory/productFactory.js";

import ContactRepository from "./contact.repository.js";
import ProductRepository from "./products.repository.js";

export const contactsService = new ContactRepository(new Conctacts());
export const productsService = new ProductRepository(new Products());