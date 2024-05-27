import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !role) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch('https://hiresynth-backend.onrender.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          role,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Login failed.');
        return;
      }

      console.log('Login successful!');

      const data = await response.json();
      localStorage.setItem('token', data.token); 

      if (role === 'Recruiter') {
        navigate('/recruiter-dashboard'); 
      } else {
        navigate('/interviewee-dashboard');
      }
      Swal.fire({
        icon: "success",
        iconHtml: '<i class="fas fa-check"></i>',
        title: 'Welcome back!',
        text: 'You have successfully logged in.'
      });
    }
    catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Login failed. Please try again.');
    }
  };

  return (
    <div className='login-container'>
      <p className='login-description'>Please enter your Email, Password, and Role to Login.</p>
      <div className='div-picture-login-form'>
        <div className='div-login-form'>
          <form onSubmit={handleSubmit} className='login-form'>
            <label className='login-label'>
              <FontAwesomeIcon icon={faEnvelope} className='login-icon' />
              Email:
            </label>
            <input
              type='login-email'
              name='email'
              className='email'
              placeholder='Enter Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label className='login-label'>
              <FontAwesomeIcon icon={faLock} className='login-icon' />
              Password:
            </label>
            <input
              type='login-password'
              name='password'
              className='password'
              placeholder='Enter Your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label className='login-label'>
              <FontAwesomeIcon icon={faUser} className='login-icon' />
              Role:
            </label>
            <select
              name='login-role'
              className='role-label'
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Your Role</option>
              <option value="Recruiter">Recruiter</option>
              <option value="Interviewee">Interviewee</option>
            </select>
            <br />
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
            <button type='submit' className='login-button'>
              Login
            </button>
            <p className='signup-par'>Don't have an Account? <button onClick={() => navigate('/signup')} className='lg-signup-button'>Sign Up</button></p>
          </form>
        </div>
        <div className='login-image'></div>
      </div>
    </div>
  );
}

export default Login;
