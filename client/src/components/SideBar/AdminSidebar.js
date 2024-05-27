import React from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons/faTachometerAlt'; // Dashboard icon
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle'; // Manage Questions icon
import { faKey } from '@fortawesome/free-solid-svg-icons/faKey'; // Change Password icon
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt'; // Logout icon
import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import Admin from "../Images/Admin.jpg"
import Swal from "sweetalert2";
import "./AdminSidebar.css"

function AdminSidebar (){
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
          await fetch("https://hiresynth-backend.onrender.com/logout", {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          localStorage.removeItem("token");
          navigate("/login");
    
          Swal.fire({
            icon: "success",
            iconHtml: '<i class="fas fa-check" style="backgroundcolor: green;"></i>',
            title: 'Goodbye!',
            text: 'You have successfully logged out.'
          });
        } 
        catch (error) {
          console.error("Error:", error);
        }
      };
    return(
        <div className="recruiter-sidebar">
            <h1 className="admin-h1">Admin Bar</h1>
            <img src={Admin} alt="admin" className="admin-picture"/>
            <div className="recruiter-links">
                <NavLink className="dashbord" to="/recruiter-dashboard" ><FontAwesomeIcon icon={faTachometerAlt} className="icon-dashboard"/> DASHBOARD</NavLink>
                <NavLink to="/questions"><FontAwesomeIcon icon={faQuestionCircle} className="icon-question"/> MANAGE QUESTIONS</NavLink>
                <NavLink to="/admin-password"><FontAwesomeIcon icon={faKey} className="icon-password"/> CHANGE PASSWORD</NavLink>
                <NavLink to="/admin-cand-output"><FontAwesomeIcon icon={faFileCode} className="icon-result"/> CANDIDATE OUTPUT</NavLink>
                <button className="logout-button" onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} className="icon-logout"/> LOGOUT</button>
            </div>
      </div>
    )
}

export default AdminSidebar;
