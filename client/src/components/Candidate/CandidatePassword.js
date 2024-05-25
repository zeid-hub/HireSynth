// import React from "react";
// import CandidateSidebar from "../SideBar/CandidateSidebar";
// import "./CandidatePassword.css"
// import Swal from "sweetalert2";
// import { useState } from "react";

// function CandidatePassword (){
//     const [oldPassword, setOldPassword] = useState('');
//     const [newPassword, setNewPassword] = useState('');
//     const [confirmNewPassword, setConfirmNewPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Validate passwords
//         if (!oldPassword || !newPassword || !confirmNewPassword) {
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Please fill in all fields!'
//         });
//         return;
//         }
//         if (newPassword !== confirmNewPassword) {
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'New passwords do not match!'
//         });
//         return;
//         }
//         // Implement password change logic here (e.g., make API call to update password)
//         // Reset form fields
//         setOldPassword('');
//         setNewPassword('');
//         setConfirmNewPassword('');
//         // Show success message
//         Swal.fire({
//         icon: 'success',
//         title: 'Success!',
//         text: 'Password changed successfully!'
//         });
//     };
//     return(
//         <div className="candidate-password">
//             <div className="candidate-sidebar-password">
//                 <CandidateSidebar/>
//             </div>
//             <div className="cand-pass-main-content">
//                 <h1 className="cand-pass-h1">Candidate's Password</h1>
//                 <form onSubmit={handleSubmit} className="cand-change-pass-form">
//                     <label className="cand-label-pass">Old Password</label>
//                     <input
//                         type="password"
//                         value={oldPassword}
//                         onChange={(e) => setOldPassword(e.target.value)}
//                         className="cand-input-pass"
//                     />
//                     <label className="cand-label-pass">New Password</label>
//                     <input
//                         type="password"
//                         value={newPassword}
//                         onChange={(e) => setNewPassword(e.target.value)}
//                         className="cand-input-pass"
//                     />
//                     <label className="cand-label-pass">Confirm New Password</label>
//                     <input
//                         type="password"
//                         value={confirmNewPassword}
//                         onChange={(e) => setConfirmNewPassword(e.target.value)}
//                         className="cand-input-pass"
//                     />
//                     <button type="submit" className="cand-button-change-pass">Change Password</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default CandidatePassword;


















import React, { useState } from "react";
import CandidateSidebar from "../SideBar/CandidateSidebar";
import "./CandidatePassword.css";
import Swal from "sweetalert2";

function CandidatePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate passwords
    if (!oldPassword || !newPassword || !confirmNewPassword || !username) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all fields!'
      });
      return;
    }
    if (newPassword !== confirmNewPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'New passwords do not match!'
      });
      return;
    }

    // Prepare data to send to API endpoint
    const data = {
      oldPassword,
      newPassword,
      username
    };

    try {
      // Make API call to update password
      const response = await fetch('/update_password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
      }

      // Reset form fields
      setOldPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
      setUsername('');

      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Password changed successfully!'
      });
    } catch (error) {
      // Show error message
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message
      });
    }
  };

  return (
    <div className="candidate-password">
      <div className="candidate-sidebar-password">
        <CandidateSidebar />
      </div>
      <div className="cand-pass-main-content">
        <h1 className="cand-pass-h1">Candidate's Password</h1>
        <form onSubmit={handleSubmit} className="cand-change-pass-form">
          <label className="cand-label-pass">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="cand-input-pass"
            placeholder="Enter Your Username"
          />
          <label className="cand-label-pass">Old Password:</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="cand-input-pass"
            placeholder="Enter Your Old Password"
          />
          <label className="cand-label-pass">New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="cand-input-pass"
            placeholder="Enter Your New Password"
          />
          <label className="cand-label-pass">Confirm New Password:</label>
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            className="cand-input-pass"
            placeholder="Confirm Your New Password"
          />
          <button type="submit" className="cand-button-change-pass">Change Password</button>
        </form>
      </div>
    </div>
  );
}

export default CandidatePassword;
