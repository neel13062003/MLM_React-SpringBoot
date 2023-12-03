import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../CSS/Login.css';

const Login = ({ setUsername }) => {
  const [username, setUsernameInput] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:8093/api/login', {
        username,
        password,
      });

      const token = response.data.token;
      localStorage.setItem('token', token);

      alert("Successfully Login");

      setUsername(username);

      navigate('/');
    } catch (error) {
      console.error('Error during login:', error.response ? error.response.data : error.message);
      setError('Invalid username or password');
      alert("Invalid Username or Password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login_div">
      <h2 className="login_h2">Login</h2>
      <form className="login_form">
        <label className="login_label">
          Username:
          <input
            className="login_input"
            required
            placeholder="Enter Your UserName"
            autoComplete="off"
            type="text"
            value={username}
            onChange={(e) => setUsernameInput(e.target.value)}
          />
        </label>
        <br />
        <label className="login_label">
          Password:
          <input
            className="login_input"
            required
            placeholder="Enter your password"
            autoComplete="off"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        {error && <p className="error_message">{error}</p>}
        <button type="button" onClick={handleLogin} className="login_button" disabled={isLoading}>
          {isLoading ? 'Logging In...' : 'Login'}
        </button>
        <Link to="/signup" className="top">
          Not have an account?
        </Link>
      </form>
    </div>
  );
};

export default Login;
