import React from 'react';
import css from './ContactList.module.css';
import { deleteContact } from '../../redux/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { selectFilterContact } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterContact).toLowerCase();
  const dispatch = useDispatch();

  const handleDelete = event => {
    dispatch(deleteContact(event.target.id));
  };

  const getVisibleContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      {contacts && (
        <ul className={css.contactList}>
          {visibleContacts.map(({ id, name, phone }) => (
            <li key={id} className={css.contactList_item}>
              <p>
                {name} {phone}
              </p>
              <button
                type="button"
                className={css.btn}
                id={id}
                onClick={handleDelete}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
