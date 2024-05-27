import React from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons/faTachometerAlt'; // Dashboard icon
import { faUserCheck } from '@fortawesome/free-solid-svg-icons/faUserCheck'; // Candidate Result icon
import { faKey } from '@fortawesome/free-solid-svg-icons/faKey'; // Change Password icon
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt'; // Logout icon
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Candidate from "../Images/Candidate.jpg"
import Swal from "sweetalert2";
import "./CandidateSidebar.css"

function CandidateSidebar (){

    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
          await fetch("/logout", {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          localStorage.removeItem("token");
          navigate("/login");

          Swal.fire({
            // icon: <FontAwesomeIcon icon={faCheck} style={{ backgroundColor: 'green' }} />,
            icon: "success",
            title: 'Goodbye!',
            text: 'You have successfully logged out.'
          });

        }
        catch (error) {
          console.error("Error:", error);
        }
      };
    return(
        <div className="interviewee-sidebar">
            <h1 className="interviewee-h1">Candidate Bar</h1>
            <img src={Candidate} alt='candidate' className='interviewee-image'/>
            <div className="interviewee-links">
                <NavLink to="/interviewee-dashboard"><FontAwesomeIcon icon={faTachometerAlt} className="cand-icon-dashoard"/> DASHBOARD</NavLink>
                <NavLink to="/candidate-result"><FontAwesomeIcon icon={faUserCheck} className="cand-icon-result"/> CANDIDATE RESULT</NavLink>
                <NavLink to="/candidate-password"><FontAwesomeIcon icon={faKey} className="cand-icon-password"/> CHANGE PASSWORD</NavLink>
                <NavLink to="/packages"> <FontAwesomeIcon icon={faStar} className="cand-icon-upgrade"/> UPGRADE</NavLink>
                <button className='interviewee-button' onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} className="cand-icon-logout"/> LOGOUT</button>
            </div>
        </div>
    )
}

export default CandidateSidebar;
