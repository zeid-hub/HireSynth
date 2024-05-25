import React from 'react';
import "./Signup.css" 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState("");
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmpassword] = useState('');
  const navigate = useNavigate();

  const roles = ['Recruiter', 'Interviewee'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !role || !password || !confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all required fields!'
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match!'
      });
      return;
    }

    try {
      const response = await fetch('/adduser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          email,
          role,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errorData.error || 'Signup failed!'
        });
        return;
      }

      Swal.fire({
        icon: 'success',
        title: 'Good job!',
        text: 'You have successfully signed up!'
      });

      setUsername('');
      setEmail('');
      setRole("");
      setPassword('');
      setConfirmpassword('');

      if (role === 'Recruiter') {
        navigate('/recruiter-dashboard');
      } else {
        navigate('/interviewee-dashboard');
      }
    } catch (error) {
      console.error('Error adding user:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Signup failed. Please try again!'
      });
    }
  };

  return (
    <div className='sign-up-container'>
      <h1 className='signup-title'>Create an Account</h1>
      <div className='outer-container'>
        <div className='inner-container'></div>
        <div className='inner-container1'>
          <form onSubmit={handleSubmit} className='signup-form'>
          <label>
            <FontAwesomeIcon icon={faUser} className='signup-icon' />
            Username
          </label>
          <input
            className='username'
            type='text'
            placeholder='Enter A New Username'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>
            <FontAwesomeIcon icon={faEnvelope} className='signup-icon' />
            Email
          </label>
          <input
            type='email'
            name='email'
            className='email'
            placeholder='Enter Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>
            <FontAwesomeIcon icon={faUser} className='signup-icon' />
            Role
          </label>
          <select
            className='role-label-sg'
            name='role'
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="" className='role-option'>Select Your Role</option>
            {roles.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>

          <label>
            <FontAwesomeIcon icon={faLock} className='signup-icon' />
            Password
          </label>
          <input
            className='password'
            type='password'
            name='password'
            placeholder='Enter Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>
            <FontAwesomeIcon icon={faLock} className='signup-icon' />
            Confirm Password
          </label>
          <input
            className='confirmpassword'
            type='password'
            name='confirmpassword'
            placeholder='Confirm Your Password'
            value={confirmPassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />

            <br />
            <button type='submit' className='button'>
              Sign Up
            </button>
            <p className='login-par'>Already have an Account? <button onClick={() => navigate('/login')} className='sg-login-button'>Login</button></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
