import React from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Header.css';

const Header = ({ username, onLogout }) => {
  const isLoggedIn = Boolean(username);

  const handleLogout = () => {
    // Call the provided onLogout function from props
    onLogout();
  };

  return (
    <nav>
      <div className="a">
        <h1 className="h1-header">MLM - BZ International</h1>
      </div>
      <div className="b">
        <h2 id="b1">Earn Money From Your Investment</h2>

        {isLoggedIn && (
          <>
            <p id="b2">Welcome {username}</p>
            <button onClick={handleLogout} className="logout_button">
              Logout
            </button>
          </>
        )}

        {!isLoggedIn && (
          <>
            <Link to="/login" className="login">
              Login
            </Link>
            <Link to="/signup" className="signup">
              SignUp
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
