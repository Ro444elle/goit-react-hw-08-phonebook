import React from 'react';
import PropTypes from 'prop-types';
import ContactsIcon from '@mui/icons-material/Contacts';

export default function ContactItem({ contact }) {
  return (
    <div>
      {contact.name}
      {contact.phoneNumber}
    </div>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
