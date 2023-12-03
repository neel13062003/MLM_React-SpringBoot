import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net'; // Import DataTables styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import 'material-design-icons/iconfont/material-icons.css'; // Import Material Icons styles

import "../../CSS/Id.css";

const Id = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const tableRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8093/api/seeIdTeam');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const initializeDataTables = () => {
      if (data.length > 0 && tableRef.current) {
        $(tableRef.current).DataTable();
      }
    };

    initializeDataTables();
  }, [data]);

  return (
    <>
      <div className="container" style={{ background: 'aliceblue', width: '60%',marginTop:'35px' }}>
        <div className="table-wrapper" style={{ margin: '20px' }}>
          <div className="table-title" style={{ borderRadius: '14px', background: 'black' }}>
            <div className="row" >
              <div className="col-sm-4" >
                <h2>All Member<b>Details</b></h2>
              </div>
              <div className="col-sm-8" >
                <a href="#" onClick={() => window.print()} className="btn btn-info">
                  <i className="material-icons">&#xE24D;</i> <span>Print</span>
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3" style={{width:'70%',marginLeft:'50px'}}>
            <table
              ref={tableRef}
              id="NoOrder1"
              className="table table-hover text-center"
              style={{width:'100%',marginLeft:'55px'}}
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {error ? (
                  <tr>
                    <td colSpan="2">{error}</td>
                  </tr>
                ) : (
                  data.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Id;
