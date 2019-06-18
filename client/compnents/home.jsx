import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Redirect to="/signin" push={true} />
  }

  return (
    <div>
      <p>
        Hello {this.state.user ? this.state.user.name : 'guest'} and welcome to MERN authentication.
        <br/> This page is visible only if you have been authenticated.
      </p>
    </div>
  );
};

export default Home;
