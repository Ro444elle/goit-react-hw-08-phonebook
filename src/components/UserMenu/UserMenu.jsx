import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operationsAuth';
import { useAuth } from 'hooks/useAuth';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <span>Welcome, {user.name} </span>
      <Button
        variant="contained"
        color="secondary"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
