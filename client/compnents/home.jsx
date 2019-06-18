import React from 'react';
import propTypes from 'prop-types';

const Home = ({isAuthenticated, user}) => {

  if (!isAuthenticated) {
    return (
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <p>Hi, looks like you have not signed in yet.</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          Hi {user.name}, and welcome to the MERN Authentication example project. You are now signed in.
        </p>
      </div>
    );
  }
};

Home.propTypes = {
  isAuthenticated: propTypes.bool,
  user: propTypes.object
};

export default Home;
