import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/ContactList/Filter/Filter';
import { selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { selectContact } from 'redux/selectors';

export default function ContactPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Phonebook</title>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading ? (
        <p>Loading Contacts</p>
      ) : (
        <ContactList contacts={contacts} />
      )}
    </>
  );
}
