import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import '../CSS/Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSignup = () => {
    // Validate the form
    const formIsValid = username.trim() !== '' && password !== '' && rePassword !== '' && password === rePassword;

    if (formIsValid && !isSubmitting) {
      setIsSubmitting(true);

      const signupData = { username, password };

      axios.post('http://localhost:8093/api/signup', signupData)
        .then(response => {
          console.log('Signup Response:', response.data);
          // Add logic to handle successful signup, e.g., redirect to login page
          alert("Signup Successful");
          navigate('/login'); // Redirect to the login page using useNavigate
        })
        .catch(error => {
          console.error('Error during signup:', error.response ? error.response.data : error.message);
          // Add logic to handle signup failure, e.g., show an error message
          alert("Signup failed");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="signup_div">
      <h2 className="signup_h2">Sign Up</h2>
      <form className="signup_form" onSubmit={(e) => e.preventDefault()}>
        <label className="signup_label">
          Username:
          <input
            required
            placeholder="Enter Your UserName"
            autoComplete="off"
            className="signup_input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="signup_label">
          Password:
          <input
            required
            placeholder="Enter your password"
            autoComplete="off"
            className="signup_input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label className="signup_label">
          Re-Password:
          <input
            required
            placeholder="Re-enter your password"
            autoComplete="off"
            className="signup_input"
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
        </label>
        <button type="submit" onClick={handleSignup} className="signup_button" disabled={isSubmitting}>
          {isSubmitting ? 'Signing Up...' : 'Sign Up'}
        </button>
        <Link to="/login" className="top">Already have an account?</Link>
      </form>
    </div>
  );
}

export default Signup;
