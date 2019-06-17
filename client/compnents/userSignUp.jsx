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
    <div className="row">
      <div className="col-md-12">

        <div className="card">
          <div className="card-body">
            <h3>Register a new account</h3>

            <form>
              <div className="form-group mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Please enter your name"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Please enter your email"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Please enter your password"
                />
              </div>

              <div className="form-group">
                <button
                  className="btn btn-secondary"
                  onClick={onSignUpClick}>
                  Register
                </button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

UserSignUp.propTypes = {
  onUserSignUp: propTypes.func.isRequired
};

export default UserSignUp;
