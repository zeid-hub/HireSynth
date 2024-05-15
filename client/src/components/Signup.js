import React from 'react';
import "./Signup.css" 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState("");
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmpassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

 
  const roles = ['Recruiter', 'Interviewee'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !role || !password || !confirmPassword) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
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
        setErrorMessage(errorData.error || 'Signup failed.');
        return;
      }

      console.log('User added successfully!');
      setUsername('');
      setEmail('');
      setRole("");
      setPassword('');
      setConfirmpassword('');
      navigate('/home');
    } catch (error) {
      console.error('Error adding user:', error);
      setErrorMessage('Signup failed. Please try again.');
    }
  };

  return (
    <div className='sign-up-container'>
      <h1 className='title'>Sign Up</h1>
      <div className='outer-container'>
        <div className='inner-container'></div>
        <div className='inner-container1'>
          <form onSubmit={handleSubmit} className='form'>
            <label>Username</label>
            <input
              className='username'
              type='text'
              placeholder='Enter A New Username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label>Email</label>
            <input
              type='email'
              name='email'
              className='email'
              placeholder='Enter Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Role</label>
            <select
              className='role'
              name='role'
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              {roles.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <br/>
            <label>Password</label>
            <input
              className='password'
              type='password'
              name='password'
              placeholder='Enter Your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label>Confirm Password</label>
            <input
              className='confirmpassword'
              type='password'
              name='confirmpassword'
              placeholder='Confirm Your Password'
              value={confirmPassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
            <br />
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
            <button type='submit' className='button'>
              Sign Up
            </button>
            <p className='login-par'>Already have an Account? <button onClick={() => navigate('/login')} className='login-button'>Login</button></p>
          </form>
</div>
      </div>
    </div>
  );
};

export default Signup;