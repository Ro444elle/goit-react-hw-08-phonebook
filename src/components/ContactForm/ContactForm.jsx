import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { FormControl, FormLabel } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createContact } from 'redux/operations';

const textFieldStyle = {
  width: '100%',
  marginBottom: '10px',
  marginTop: '10px',
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(createContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <FormControl sx={{ padding: '20px' }}>
          <>
            <FormLabel>Enter Name</FormLabel>
            <Field
              as={TextField}
              type="text"
              name="name"
              pattern="^[a-zA-Z]+(([ \\-][a-zA-Z ])?[a-zA-Z]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter a name"
              sx={{ width: '100%' }}
            ></Field>
            <FormLabel>Enter a phone number</FormLabel>
            <Field
              as={TextField}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="Enter a phone number"
              sx={{ textFieldStyle }}
            ></Field>
            <Button
              sx={{ marginTop: '10px' }}
              type="submit"
              variant="contained"
              color="secondary"
            >
              Add Contact
            </Button>
          </>
        </FormControl>
      </Form>
    </Formik>
  );
}
