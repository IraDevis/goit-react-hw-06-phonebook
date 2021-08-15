import { useSelector, useDispatch } from "react-redux";
import getContactsList from "../../redux/contacts/contacts-selector";
import { deleteContact } from "../../redux/contacts/contacts-actions";

export default function ContactList() {
  const contacts = useSelector(getContactsList);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
