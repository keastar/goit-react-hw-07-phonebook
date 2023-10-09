import React from 'react';
import Filter from '../Filter/Filter';
import Form from '../Form/Form';
import ContactList from '../ContactList/ContactList';
import Layout from '../Layout/Layout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsApi';
import css from '../Form/Form.module.css';
import {
  // selectContacts,
  selectIsLoading,
  selectError,
  // selectFilterContact,
} from 'redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Form />
        <Filter />
        {isLoading && !error && (
          <b className={css.request}>Request in progress...</b>
        )}
        <ContactList />
      </Layout>
    </>
  );
}
