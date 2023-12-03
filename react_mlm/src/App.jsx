import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';

import Header from './Components/Require_Components/Header';
import Footer from './Components/Require_Components/Footer';

import Login from './Components/Login';
import SignUp from './Components/SignUp';

import Home from './Components/Home';
import AddTeam from './Components/Crud/AddTeam';
import AddAmount from './Components/Crud/AddAmount';
import Fd from './Components/Crud/Fd';
import See from './Components/Crud/See';
import TreeView from './Components/Crud/TreeView';
import Commission from './Components/Crud/Commission';
import Id from './Components/Crud/Id';

function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check if there's a stored token in local storage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Assuming your authentication logic sets the username when a token is present
      setUsername('user'); // Replace 'user' with the actual username
    }
  }, []); // Run this effect only once on component mount

  const handleLogin = (token) => {
    // Save the token to local storage
    localStorage.setItem('token', token);
    // Assuming your authentication logic sets the username when a token is present
    setUsername('user'); // Replace 'user' with the actual username
  };

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');
    setUsername('');
  };

  return (
    <Router>
      <Header username={username} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/login"
          element={<Login setUsername={setUsername} onLogin={handleLogin} />}
        />
        <Route path="/signup" element={<SignUp />} />
        {username ? (
          <React.Fragment>
            <Route path="/" element={<Home username={username} />} />
            <Route path="/add_team" element={<AddTeam />} />
            <Route path="/add_amount" element={<AddAmount />} />
            <Route path="/fd" element={<Fd />} />
            <Route path="/see" element={<See />} />
            <Route path="/tree_view" element={<TreeView />} />
            <Route path="/commission/:id" element={<Commission />} />
            <Route path="/id" element={<Id />} />
          </React.Fragment>
        ) : (
          <Route
            path="/*"
            element={
              <Navigate
                to="/login"
                replace // Replace the current URL in the history
              />
            }
          />
        )}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
