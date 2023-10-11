import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operationsAuth';
import { useAuth } from 'hooks/useAuth';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const username = user.email.split('@')[0];
  const isNumberStart = /^\d/.test(username);

  const capitalizedUsername = isNumberStart
    ? username
    : username.charAt(0).toUpperCase() + username.slice(1);

  return (
    <div>
      <span>Welcome, {capitalizedUsername} </span>
      <Button
        variant="outlined"
        sx={{ color: '#000' }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
