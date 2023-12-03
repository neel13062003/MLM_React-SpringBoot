import React, { useState } from 'react';

import '../../CSS/TreeView.css';

const TreeView = () => {
  const [username, setUsername] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8093/api/id?name=${username}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setTeamMembers(data);
      setError(null);
    } catch (error) {
      setTeamMembers([]);
      setError('Error fetching team members. Please try again.');
      console.error('Error fetching team members:', error);
    }
  };

  return (
    <div className="add-container">
      <form className="add-form" onSubmit={handleSubmit}>
        <h1 className="h1_see" style={{ color: '#50ff08', fontFamily: 'Algerian, sans-serif', fontSize: '40px' }}>
          See Your Team ( Tree View )
        </h1>
        <ul>
          <li className="see1">
            <label htmlFor="name">Enter Username Of Member:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="seeinput"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </li>
        </ul>
        <button type="submit" className="btn1">
          Submit
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {teamMembers.length > 0 && (
        <div className="team-members">
          <h2>Team Members:</h2>
          <ul>
            {teamMembers.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TreeView;
