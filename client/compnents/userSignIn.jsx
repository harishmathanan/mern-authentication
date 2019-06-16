import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserSignIn = ({ onUserSignIn }) => {
  const onSignInClick = (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
      email,
      password
    };

    onUserSignIn(user);
  }

  return (
    <div>
      <h3>Sign In</h3>
      <div>New user? <Link to="/signup">Sign up</Link> for an account now.</div>
      <form>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Please enter your email"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Please enter your password"
          />
        </div>

        <div>
          <button onClick={onSignInClick}>Sign In</button>
        </div>

      </form>
    </div>
  );
};

UserSignIn.propTypes = {
  onUserSignIn: propTypes.func.isRequired
};

export default UserSignIn;
