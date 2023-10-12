import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilter } from 'redux/selectors';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  IconButton,
  Paper,
} from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import DeleteIcon from '@mui/icons-material/Delete';
import theme from '../../themes';

export default function ContactList({ contacts }) {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const [openContactId, setOpenContactId] = useState(null);

  const filteredContacts = contacts?.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleContactClick = contactId => {
    if (openContactId === contactId) {
      setOpenContactId(null);
    } else {
      setOpenContactId(contactId);
    }
  };

  return (
    <Paper>
      <List>
        {filteredContacts.map(contact => (
          <React.Fragment key={contact.id}>
            <ListItem>
              <ListItemIcon>
                <ContactsIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ cursor: 'pointer' }}
                primary={contact.name}
                onClick={() => handleContactClick(contact.id)}
              />
              <IconButton
                aria-label="delete"
                onClick={() => dispatch(deleteContact(contact.id))}
                variant="outlined"
                size="small"
                sx={{ color: theme.palette.secondary.light }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>

            <Collapse
              in={openContactId === contact.id}
              timeout="auto"
              unmountOnExit
            >
              <ListItem>
                <ListItemText primary={`Phone : ${contact.phoneNumber}`} />
              </ListItem>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

// <ul>
//   {filteredContacts.map(contact => (
//     <li key={contact.id}>
//       <ContactItem contact={contact} />
//       <button onClick={() => dispatch(deleteContact(contact.id))}>
//         Delete
//       </button>
//     </li>
//   ))}
// </ul>
//   );
// }
