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
      <Typography
        variant="h4"
        component="h4"
        align="center"
        sx={{ marginTop: '-800px', marginBottom: '20px', fontSize: '18px' }}
      >
        Welcome to your Home Page
      </Typography>
      <Paper elevation={24}>
        <ContactForm />

        <Typography
          variant="h4"
          component="h4"
          sx={{
            marginLeft: '20px',
            marginTop: '10px',
            fontSize: '20px',
          }}
        >
          ALL CONTACTS
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
