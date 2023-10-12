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
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

import img8 from '../../assets/images/image8.jpg';
import img10 from '../../assets/images/image10.jpg';

export default function NavBar() {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

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
        {isLoggedIn ? (
          <Typography variant="h4" align="center" sx={{ marginTop: '50px' }}>
            {/* Welcome to your Home Page */}
          </Typography>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              padding: '50px',
            }}
          >
            {isHomePage && !isLoggedIn && (
              <>
                <Typography variant="h5" sx={{ align: 'center' }}>
                  Welcome to your Contact Manager
                </Typography>

                <Box
                  sx={{
                    align: 'center',
                    width: 'auto',
                    marginTop: '50px',
                    backgroundColor: 'white',
                    padding: '20px',
                    boxShadow:
                      'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
                  }}
                >
                  <img src={img8} alt="phone" sx={{ width: '400px' }} />
                </Box>
              </>
            )}
          </Box>
        )}

        {isHomePage && isLoggedIn && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              padding: '50px',
            }}
          >
            <Typography variant="h4" align="center" sx={{ marginTop: '50px' }}>
              Welcome Home
            </Typography>
            <Box
              sx={{
                maxWidth: '650px',
                align: 'center',
                width: 'auto',
                marginTop: '50px',
                backgroundColor: 'white',
                padding: '20px',
                boxShadow:
                  'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
              }}
            >
              <img src={img10} alt="phone" width={'600px'} />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
