import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Product from "./ProDuct";
import Demo from "./Demo"; // Ensure Demo is correctly imported
import "./Navbar.css";

function NavBar() {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false); // Define state for Demo

  // Function to toggle Product visibility
  const toggleProduct = () => {
    setIsProductOpen(!isProductOpen);
  };

  // Function to toggle Demo visibility
  const toggleDemo = () => {
    setIsDemoOpen(!isDemoOpen);
  };

  return (
    <nav className="nav">
      <ul className="nav-menu">
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/about us">About Us</NavLink>
        </li>
        <li>
          <NavLink exact to="/questtrail" onClick={toggleDemo}>Quest Trail</NavLink>
          {/* <NavLink exact to="/our product" onClick={toggleProduct}>
            Product
          </NavLink> */}
        </li>
        <li>
          <NavLink exact to="/assessments">Assessments</NavLink>
        </li>
        <li>
          <NavLink exact to="/signup">Sign Up</NavLink>
        </li>
      </ul>
      <div className="nav-buttons">
        <button className="blue-button demo-button" onClick={toggleDemo}>
          Demo
        </button>
      </div>
    
      {isProductOpen && <Product />}
      {isDemoOpen && <Demo />}
    </nav>
  );
}

export default NavBar;
