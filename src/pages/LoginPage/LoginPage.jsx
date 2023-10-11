import React, { useState } from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operationsAuth';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChangeInput = event => {
    const { name, value } = event.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(email, password);
    dispatch(logIn({ email: email, password: password }));
    navigate('/contacts');
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        margin: 'auto',
        marginBottom: '80px',
        width: '100%',
        maxWidth: '300px',
        backgroundColor: 'white',
        padding: '20px',
        boxShadow:
          'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: '24px',
          color: 'primary.dark',
          textAlign: 'center',
        }}
      >
        LOGIN
      </Typography>
      <TextField
        type="email"
        name="email"
        id="outlined-basic"
        variant="outlined"
        placeholder="Email"
        fullWidth
        onChange={handleChangeInput}
      />
      <TextField
        type="password"
        name="password"
        id="outlined-basicbasic"
        variant="outlined"
        placeholder="Password"
        fullWidth
        onChange={handleChangeInput}
      />
      <Button startIcon={<LoginIcon />} type="submit" variant="contained">
        Login
      </Button>
    </Box>
  );
}
