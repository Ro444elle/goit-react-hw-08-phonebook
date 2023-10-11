import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Button } from '@mui/material';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">
        <Button variant="outlined" sx={{ color: 'black' }}>
          Home
        </Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Button variant="outlined" sx={{ color: 'black' }}>
            Contacts
          </Button>
        </NavLink>
      )}
    </nav>
  );
};
