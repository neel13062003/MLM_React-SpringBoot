import React, { useState } from 'react';
import "../../CSS/Fd.css";

const Fd = () => {
  const [formData, setFormData] = useState({
    name: '',
    fd: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8093/api/addFd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Fd added successfully');
        alert('Fd added successfully');
        // Optionally, you can redirect the user or perform other actions
        setFormData({
          name: '',
          amount: ''
        });
      } else {
        console.error('Failed to add amount');
        alert('Failed to add amount');
        // Handle the error, display a message, etc.
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-container">
      <form className="add-form" onSubmit={handleSubmit}>
        <h1 class="h1_fd" style={{color:'#50ff08',fontFamily: 'Algerian, sans-serif',fontSize:'40px'}}>Add Fd</h1>
        <ul>
          <li>
            <label htmlFor="name">Name Of Member (Username):</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </li>
          <li>
            <label htmlFor="fd">Add Fd:</label>
            <input type="text" id="fd" name="fd" value={formData.amount} onChange={handleChange} required />
          </li>
        </ul>
        <button type="submit" className="btn1">Submit</button>
      </form>
    </div>
  );
}

export default Fd;
