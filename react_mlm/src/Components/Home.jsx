// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../CSS/Home.css';

// const Home = () => {
//   return (
//           <div className="link-container">
//             <div className="button-container">
//               <Link to="/add_team" className="l">Add Your Investment Team</Link>
//               <Link to="/add_amount" className="l">Add Amount</Link>
//               <Link to="/fd" className="l">FD</Link>
//               <Link to="/see" className="l">See All Your Member</Link>
//               <Link to="/tree_view" className="l">See All Your Member (Tree View)</Link>
//               <Link to="/commission/:id" className="l">Calculate Your Commission</Link>
//               <Link to="/id" className="l">See ID of All Members</Link>
//               <Link to="/commission" className="l">All People Commission</Link>  
//              </div> 
//           </div>
//   );
// }

// export default Home;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Home.css';

const Home = ({ username }) => {
  const navigate = useNavigate();

  return (
    <div className="link-container">
      {username ? (
        <div className="button-container">
          <Link to="/add_team" className="l">
            Add Your Investment Team
          </Link>
          <Link to="/add_amount" className="l">
            Add Amount
          </Link>
          <Link to="/fd" className="l">
            FD
          </Link>
          <Link to="/see" className="l">
            See All Your Member
          </Link>
          <Link to="/tree_view" className="l">
            See All Your Member (Tree View)
          </Link>
          <Link to="/commission/:id" className="l">
            Calculate Your Commission
          </Link>
          <Link to="/id" className="l">
            See ID of All Members
          </Link>
          <Link to="/commission" className="l">
            All People Commission
          </Link>
        </div>
      ) : (
        <React.Fragment>
          <p>Please login to access the content.</p>
          {/* or you can redirect to the login page using react-router-dom Redirect component */}
          {/* <Redirect to="/login" /> */}
          {navigate('/login')}
        </React.Fragment>
      )}
    </div>
  );
};

export default Home;

