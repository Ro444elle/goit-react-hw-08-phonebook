import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/ContactList/Filter/Filter';
import { selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { selectContact } from 'redux/selectors';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function ContactPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Paper elevation={24}>
        <ContactForm />
        <Typography
          variant="h3"
          component="h3"
          sx={{
            marginLeft: '20px',
            marginTop: '10px',
          }}
        >
          Contacts all
        </Typography>
        <Filter />
        {isLoading ? (
          <p>Loading Contacts</p>
        ) : (
          <ContactList contacts={contacts} />
        )}
      </Paper>
    </>
  );
}
