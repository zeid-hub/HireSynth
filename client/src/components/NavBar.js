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
  );
}

export default NavBar;