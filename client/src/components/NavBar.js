import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  return (
    <nav className="nav">
      <div className="logo">Hiresynth</div>
      <ul className="nav-menu">
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/questtrail">Quest Trail</NavLink>
        </li>
        {/* <li>
          <NavLink to="/assessments">Assessments</NavLink>
        </li> */}
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </ul>
      <div className="nav-buttons">
        <NavLink className="blue-button demo-button" to="/demo">
          Demo
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
