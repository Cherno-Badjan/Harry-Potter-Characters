import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav>
        <NavLink exact activeClassName="link" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="link" to="/characters">
          Characters
        </NavLink>
      </nav>
    </div>
  );
}
