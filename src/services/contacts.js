import { ContactsCollection } from "../db/models/contacts.js";

export const getAllContacts = async => {
    return await ContactsCollection.find();
};

export const getAllContactById = async (contactId) => {
    return await ContactsCollection.findById(contactId);
};