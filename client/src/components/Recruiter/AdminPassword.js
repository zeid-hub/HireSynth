import React, { useState } from "react";
import AdminSidebar from "../SideBar/AdminSidebar";
import "./AdminPassword.css";
import Swal from "sweetalert2";

function AdminPassword() {
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

      setUsername('')
      setOldPassword('');
      setNewPassword('');
      setConfirmNewPassword('');

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
    <div className="div-admin-password">
      <div className="admin-sidebar-password">
        <AdminSidebar />
      </div>
      <div className="admin-pass-main-content">
        <h1 className="admin-pass-h1">Admin's Password</h1>
        <form onSubmit={handleSubmit} className="change-pass-form">
          <label className="label-pass">Username:</label>
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-pass"
            placeholder="Enter Your Username"
          />
          <label className="label-pass">Old Password:</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="input-pass"
            placeholder="Enter Your Old Password"
          />
          <label className="label-pass">New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="input-pass"
            placeholder="Enter Your New Password"
          />
          <label className="label-pass">Confirm New Password:</label>
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            className="input-pass"
            placeholder="Confirm Your New Password"
          />
          <button type="submit" className="button-change-pass">Change Password</button>
        </form>
      </div>
    </div>
  );
}

export default AdminPassword;
