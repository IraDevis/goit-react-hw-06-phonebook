import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/add", (contact) => ({
  payload: {
    id: contact.id,
    name: contact.name,
    number: contact.number,
  },
}));

export const deleteContact = createAction("contacts/delete");
