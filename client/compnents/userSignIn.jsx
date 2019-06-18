import React from 'react';
import propTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const UserSignIn = (props) => {
  const { onUserSignIn, history } = props;
  console.log(history);

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
    <div className="row">
      <div className="col-md-12">

        <h3>Sign In</h3>
        <div>New user? <Link to="/signup">Sign up</Link> for an account now.</div>

        <div className="card">
          <div className="card-body">

            <form>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="text"
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
                  onClick={onSignInClick}>
                  Sign In
                </button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

UserSignIn.propTypes = {
  onUserSignIn: propTypes.func.isRequired
};

export default withRouter(UserSignIn);
