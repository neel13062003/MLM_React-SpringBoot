import React, { useState } from 'react';
import "../../CSS/AddTeam.css";

const AddTeam = () => {
  const [formData, setFormData] = useState({
    name: '',
    upline: '',
    amount: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);

    try {
      const response = await fetch('http://localhost:8093/api/addTeam', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Team added successfully');
        alert('Team added successfully');
        setFormData({
          name: '',
          upline: '',
          amount: ''
        });
      } else {
        console.error('Failed to add team');
        alert('Failed to add team');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-container">
      <form className="add-form" onSubmit={handleSubmit}>
        <h1 class="text-center h1_addteam" style={{color:'#50ff08',fontFamily: 'Algerian, sans-serif',fontSize:'40px'}}>Add Your Team</h1>
        <ul>
          <li>
            <label htmlFor="name">Name Of Member (Username):</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </li>
          <li>
            <label htmlFor="upline">Upline Username (If Franchise Then Empty):</label>
            <input type="text" id="upline" name="upline" value={formData.upline} onChange={handleChange} />
          </li>
          <li>
            <label htmlFor="amount">Amount:</label>
            <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleChange} required />
          </li>
        </ul>
        <button type="submit" className="btn1">Submit</button>
      </form>
    </div>
  );
}

export default AddTeam;
