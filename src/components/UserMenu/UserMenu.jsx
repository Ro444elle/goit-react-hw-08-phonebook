import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operationsAuth';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <span>Welcome, {user.name} </span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
