// import React, { useState } from "react";
// import CandidateSidebar from "../SideBar/CandidateSidebar";
// import "./CandidatePassword.css";
// import Swal from "sweetalert2";

// function CandidatePassword() {
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmNewPassword, setConfirmNewPassword] = useState('');
//   const [username, setUsername] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!oldPassword || !newPassword || !confirmNewPassword || !username) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Please fill in all fields!'
//       });
//       return;
//     }
//     if (newPassword !== confirmNewPassword) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'New passwords do not match!'
//       });
//       return;
//     }

//     const data = {
//       oldPassword,
//       newPassword,
//       username
//     };

//     try {
//       const response = await fetch('https://hiresynth-backend.onrender.com/update_password', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });

//       if (!response.ok) {
//         const errorMessage = await response.json();
//         throw new Error(errorMessage.message);
//       }

//       setOldPassword('');
//       setNewPassword('');
//       setConfirmNewPassword('');
//       setUsername('');

//       Swal.fire({
//         icon: 'success',
//         title: 'Success!',
//         text: 'Password changed successfully!'
//       });
//     } catch (error) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: error.message
//       });
//     }
//   };

//   return (
//     <div className="candidate-password">
//       <div className="candidate-sidebar-password">
//         <CandidateSidebar />
//       </div>
//       <div className="cand-pass-main-content">
//         <h1 className="cand-pass-h1">Candidate's Password</h1>
//         <form onSubmit={handleSubmit} className="cand-change-pass-form">
//           <label className="cand-label-pass">Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="cand-input-pass"
//             placeholder="Enter Your Username"
//           />
//           <label className="cand-label-pass">Old Password:</label>
//           <input
//             type="password"
//             value={oldPassword}
//             onChange={(e) => setOldPassword(e.target.value)}
//             className="cand-input-pass"
//             placeholder="Enter Your Old Password"
//           />
//           <label className="cand-label-pass">New Password:</label>
//           <input
//             type="password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             className="cand-input-pass"
//             placeholder="Enter Your New Password"
//           />
//           <label className="cand-label-pass">Confirm New Password:</label>
//           <input
//             type="password"
//             value={confirmNewPassword}
//             onChange={(e) => setConfirmNewPassword(e.target.value)}
//             className="cand-input-pass"
//             placeholder="Confirm Your New Password"
//           />
//           <button type="submit" className="cand-button-change-pass">Change Password</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CandidatePassword;







import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
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

    const data = {
      oldPassword,
      newPassword,
      username
    };

    try {
      const response = await fetch('https://hiresynth-backend.onrender.com/update_password', {
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

      setOldPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
      setUsername('');

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Password changed successfully!'
      });
    } catch (error) {
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
          <div className="cand-input-container">
            <label className="cand-label-pass">
              <FontAwesomeIcon icon={faUser} /> Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="cand-input-pass"
              placeholder="Enter Your Username"
            />
          </div>
          <div className="cand-input-container">
            <label className="cand-label-pass">
              <FontAwesomeIcon icon={faLock} /> Old Password
            </label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="cand-input-pass"
              placeholder="Enter Your Old Password"
            />
          </div>
          <div className="cand-input-container">
            <label className="cand-label-pass">
              <FontAwesomeIcon icon={faLock} /> New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="cand-input-pass"
              placeholder="Enter Your New Password"
            />
          </div>
          <div className="cand-input-container">
            <label className="cand-label-pass">
              <FontAwesomeIcon icon={faLock} /> Confirm New Password
            </label>
            <input
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="cand-input-pass"
              placeholder="Confirm Your New Password"
            />
          </div>
          <button type="submit" className="cand-button-change-pass">Change Password</button>
        </form>
      </div>
    </div>
  );
}

export default CandidatePassword;
