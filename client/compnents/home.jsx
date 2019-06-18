import React from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Home = (props) => {
  if (!props.isAuthenticated) {
    props.history.push('/signin');

  }

  return (
    <div>
      <p>
        Hello {props.user ? props.user.name : 'guest'} and welcome to MERN authentication.
        <br /> This page is visible only if you have been authenticated.
      </p>
    </div>
  );
};

Home.propTypes = {
  isAuthenticated: propTypes.bool,
  user: propTypes.object,
  history: propTypes.object.isRequired // passed in via-withRouter
};

export default withRouter(Home);
