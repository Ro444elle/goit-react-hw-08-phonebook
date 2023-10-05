import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" exact>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
