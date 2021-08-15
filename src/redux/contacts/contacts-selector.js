export const getContacts = (state) => state.contacts;

export default function getContactsList(state) {
  return getContacts(state).filter((contact) =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );
}
