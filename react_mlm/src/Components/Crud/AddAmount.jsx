import React, { useState } from 'react';
import "../../CSS/AddAmount.css";

const AddAmount = () => {
  const [formData, setFormData] = useState({
    name: '',
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

    try {
      const response = await fetch('http://localhost:8093/api/addAmount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Amount added successfully');
        alert('Amount added successfully');
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
        <h1 class="text-center h1_addamount" style={{color:'#50ff08',fontFamily: 'Algerian, sans-serif',fontSize:'40px'}}>Add Amount</h1>
        <ul>
          <li>
            <label htmlFor="name">Name Of Member (Username):</label>
            <input class="input_addA" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </li>
          <li>
            <label htmlFor="amount">Add Amount:</label>
            <input class="input_addA" type="text" id="amount" name="amount" value={formData.amount} onChange={handleChange} required />
          </li>
        </ul>
        <button type="submit" className="btn1">Submit</button>
      </form>
    </div>
  );
}

export default AddAmount;
