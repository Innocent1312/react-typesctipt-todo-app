import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {

  return (
    <nav>
      <div className="nav-wrapper indigo lighten-2">
        <NavLink to="/" className="brand-logo center">Home</NavLink>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><NavLink to="/">Todo List</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
    </nav>
  )
};

export default Navigation;
