import React, { useState } from 'react';
import axios from 'axios';

import '../../CSS/See.css';

const See = () => {
  const [username, setUsername] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8093/api/id?name=${username}`);
      setTeamMembers(response.data);
      setError(null);
    } catch (error) {
      setTeamMembers([]);
      setError('Error fetching team members. Please try again.');
      console.error('Error fetching team members:', error);
    }
  };

  const renderTree = (members, level) => {
    return (
      <ul>
        {members.map((member) => (
          <li key={member.name}>
            <span style={{ color: 'black', fontSize: '10px', marginLeft: 'auto', marginRight: 'auto' }}>
              {member.name}
            </span>
            {member.children && member.children.length > 0 && renderTree(member.children, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="add-container">
      <form className="add-form" onSubmit={handleSubmit}>
        <h1 className="h1_see" style={{ color: '#50ff08', fontFamily: 'Algerian, sans-serif', fontSize: '40px' }}>
          See Your Team
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

      <div className="tree-container">
        <div className="tree">
          {teamMembers.length > 0 && renderTree(teamMembers, 0)}
        </div>
      </div>
    </div>
  );
};

export default See;
