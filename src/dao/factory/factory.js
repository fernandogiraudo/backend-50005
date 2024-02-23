import mongoose from "mongoose";
import config from "../../configs/config.js";

let Contacts;

switch (config.persistence) {
    case 'MONGO':
        const {default : ContactMongo} = await import('../mongo/contacts.mongo.js');
        mongoose.connect('mongodb+srv://fergiraudo91:Luna.2024@coder.3hytpje.mongodb.net/coder');
        Contacts = ContactMongo;    
        break;

    case 'MEMORY':
        const {default : ContactMemory} = await import ('../memory/contacts.memory.js');
        Contacts = ContactMemory;
    break;
}

export default Contacts;