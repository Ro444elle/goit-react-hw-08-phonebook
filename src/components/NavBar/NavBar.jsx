import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
// import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export default function NavBar() {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ContactBook
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Navigation />
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <>
                <NavLink to="/register" sx={{ marginRight: 1 }}>
                  <Button variant="outlined" sx={{ color: '#fff' }}>
                    Register
                  </Button>
                </NavLink>

                <NavLink to="/login">
                  <Button variant="outlined" sx={{ color: '#fff' }}>
                    Log In
                  </Button>
                </NavLink>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography variant="h4" align="center">
          Welcome to your Contact Manager
        </Typography>
      </Box>
    </Box>
  );
}
