import mongoose from "mongoose";

const contactCollection = 'contacts';

const contactSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    fullName: String,
    email: String,
    phone: String
});

export const contactModel = mongoose.model(contactCollection, contactSchema);