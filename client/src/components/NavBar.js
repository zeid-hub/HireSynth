<<<<<<< HEAD
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
=======
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "./Images/Icon.jpeg"
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <img src={Logo} alt="logo" className="navbar-image"/>
      <NavLink exact to="/" className={"navbar-home"}>Home</NavLink>
      <NavLink exact to="/questtrail" className={"navbar-quest"}>Quest Trail</NavLink>
      <NavLink exact to="/about us" className={"navbar-about"}>About Us</NavLink>
      <NavLink exact to="/signup" className={"navbar-signup"}>Get Started</NavLink>
      <button className="blue-button demo-button" onClick={() => navigate('/demo-page')} >Get A Demo</button>
    </div>
>>>>>>> fd4a71afb4314d43ff4b1d2fa3ec31250ec4c606
  );
}

export default NavBar;
