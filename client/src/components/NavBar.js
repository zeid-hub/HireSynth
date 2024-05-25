import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Product from "./ProDuct"; 
import "./Navbar.css";

function NavBar() {
  const [isProductOpen, setIsProductOpen] = useState(false);

  // Function to toggle Product visibility
  const toggleProduct = () => {
    setIsProductOpen(!isProductOpen);
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
        <NavLink exact to="/questtrail">Quest Trail</NavLink>
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
        <button className="blue-button demo-button">
          Get a Demo
        </button>
      </div>
    
      {isProductOpen && <Product />}
    </nav>
  );
}

export default NavBar;