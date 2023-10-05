import { NavLink } from 'react-router-dom';

import React from 'react';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In </NavLink>
    </div>
  );
}
