import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-actions";
import { getContacts } from "../../redux/contacts/contacts-selector";
import shortid from "shortid";

import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;

      case "number":
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allContacts = contacts.map((contact) => contact.name.toLowerCase());

    if (allContacts.find((contact) => contact === name.toLowerCase())) {
      return alert("This name has already used, enter another name, please!");
    }

    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    dispatch(addContact(newContact));

    setName("");
    setNumber("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          Name
          <input
            className={styles.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
            value={name}
          />
        </label>
        <label className={styles.formLabel}>
          Number
          <input
            className={styles.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
            value={number}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}
