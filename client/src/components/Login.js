import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation (optional, consider using a validation library)
    if (!email || !password) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Login failed.');
        return;
      }

      console.log('Login successful!');
      // Store token or handle authentication (replace with your logic)
      const data = await response.json();
      localStorage.setItem('token', data.token); // Example token storage
      navigate('/home'); // Assuming home page path is '/home'
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Login failed. Please try again.');
    }
  };

    return (
        <div className='login-container'>
          <h1 className='title'>Login</h1>
          <p className='description'>Please enter your Email and Password to Login.</p>
          <div className='login-form'>
          <form onSubmit={handleSubmit} className='form'>
            <label>Email:</label>
            <input
              type='email'
              name='email'
              className='email'
              placeholder='Enter Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password:</label>
            <input
              type='password'
              name='password'
              className='password'
              placeholder='Enter Your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
            <button type='submit' className='button'>
              Login
            </button>
            </form>
          </div>
        </div>
    );
}

export default Login;
