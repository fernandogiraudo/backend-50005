import { Router } from "express";
// import MemoryContact from "../dao/memory/contacts.memory.js";
// import MongoContact from "../dao/mongo/contacts.mongo.js";
// import { Contacts } from "../dao/factory/factory.js";
import ContactDTO from "../dtos/contact.dto.js";
import { contactsService } from "../dao/repositories/index.js";

const contactRoutes = Router();


contactRoutes.get('/', async (req, res) => {
    const result = await contactsService.getContacts();
    res.send(result);
});

contactRoutes.post('/', async (req, res) => {
    const contact = new ContactDTO(req.body);
    const result = await contactsService.createContact(contact);
    if(result){
        return res.status(201).send({message: 'Contact created'});
    }
    res.status(400).send({message: 'Error'});
});

contactRoutes.put('/:CId', async (req, res) => {
    const { CId } = req.params;
    const concat = req.body;
    const result = await contactService.put(CId, concat);
    if(result){
        return res.send({message: 'Contact modified'});
    }
    res.status(400).send({message: 'Error'});
});

contactRoutes.delete('/:cId', async (req, res) => {
    const { cId } = req.params;
    const result = await contactService.delete(cId);
    if(result){
        return res.send('Conctact deleted');
    }
    res.status(400).send({message: 'Error'});
})

export default contactRoutes;