import React from 'react';
import "../../CSS/Commission.css";

const Commission = () => {
  return (
    <div className="add-container-c1">
      <form className="add-form">
        <h1 style={{ lineHeight: "1.5", marginTop: "20px",margin:"10px",color:'#50ff08',fontFamily: 'Algerian, sans-serif',fontSize:'40px' }}>Calculate Commission</h1>
        <ul>
          <li className="see1">
            <label htmlFor="username">Enter Username Of Member:</label>
            <input type="text" id="username" name="username" className="seeinput"/>
          </li>
        </ul>
        <button type="submit" className="btn1">Submit</button>
      </form>
    </div>
  );
}

export default Commission;
