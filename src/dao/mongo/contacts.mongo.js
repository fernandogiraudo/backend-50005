import { contactModel } from "../../models/contact.model.js";

export default class Contacts {
    constructor(){}

    get = async () => {
        const contacts = await contactModel.find();
        return contacts;
    }

    post = async (contact) => {
        try {
            const result = await contactModel.create(contact);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    put = async (id, contact) => {
        try {
            const result = await contactModel.findOneAndUpdate({_id: id}, contact);
            return true;
        } catch (error) {
            return false;
        }
    }

    delete = async (id) => {
        try {
            const result = await contactModel.deleteOne({_id: id});
            return true;
        } catch (error) {
            return false;
        }
    }
}