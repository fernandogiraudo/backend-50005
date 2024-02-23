import ContactDTO from "../../dtos/contact.dto.js";

export default class ContactRepository {
    constructor(dao){
        this.dao = dao;
    }

    getContacts = async () => {
        const result = await this.dao.get();
        return result;
    }

    createContact = async (contact) => {
        const newContact = new ContactDTO(contact);
        const result = await this.dao.post(newContact);
        return result;
    }

}