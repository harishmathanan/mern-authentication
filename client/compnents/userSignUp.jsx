import React from 'react';
import propTypes from 'prop-types';

const UserSignUp = ({ onUserSignUp }) => {
  const onSignUpClick = (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const user = {
      name,
      email,
      password
    };
  
    onUserSignUp(user);
  }

  return (
    <div>
      <h3>Register a new account</h3>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Please enter your name"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
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
          <button onClick={onSignUpClick}>Register</button>
        </div>
      </form>
    </div>
  );
};

UserSignUp.propTypes = {
  onUserSignUp: propTypes.func.isRequired
};

export default UserSignUp;
