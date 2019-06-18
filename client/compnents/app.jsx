import React from 'react';
import Axios from 'axios';
import propTypes from 'prop-types';
import { Route, Link, withRouter } from 'react-router-dom';

import Error from './error';
import Home from './home';
import UserSignUp from './userSignUp';
import UserSignIn from './userSignIn';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isError: false,
      message: '',
      isAuthenticated: false,
      user: null
    };
  }

  render() {
    return (
      <div className="container">
        <header className="row">
          <div className="col-md-12 col-sm-12">

            <h1 className="display-4"><Link to='/'>MERN Authentication</Link></h1>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                {this.state.user
                  ? <Link className="nav-link active" to="/" onClick={this.onUserSignOut}>Sign Out</Link>
                  : <Link className="nav-link active" to="/signin">Sign In</Link>
                }
              </li>
            </ul>
            <hr />

          </div>
        </header>

        {this.state.isError &&
          <Error message={this.state.message} />
        }

        <main>
          <Route
            exact
            path="/"
            render={() => <Home isAuthenticated={this.state.isAuthenticated} user={this.state.user} />}
          />

          <Route
            exact
            path="/signup"
            render={() => <UserSignUp onUserSignUp={this.onUserSignUp} />}
          />

          <Route
            exact
            path="/signin"
            render={() => <UserSignIn onUserSignIn={this.onUserSignIn} />}
          />
        </main>
      </div>
    );
  }

  onUserSignUp = async (user) => {

    const signUpResponse = await Axios({
      method: 'post',
      url: 'http://localhost:5555/api/user/signup',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(user)
    });

    if (signUpResponse.status !== 200) {
      this.setState({ isError: true, message: 'Error signing up.' });

    } else {

      const getUserResponse = await Axios({
        method: 'get',
        url: 'http://localhost:5555/api/user',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (getUserResponse.status !== 200) {
        this.setState({ isError: true, message: 'Error getting user.' });

      } else {
        this.setState({
          isError: false,
          isAuthenticated: true,
          user: getUserResponse.data.user
        }, this.props.history.push('/'));
      }
    }
  }

  onUserSignIn = async (user) => {

    const signInResponse = await Axios({
      method: 'post',
      url: 'http://localhost:5555/api/user/signin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(user)
    });

    if (signInResponse.status !== 200) {
      this.setState({ isError: true, message: 'Error signing in.' });

    } else {

      const getUserResponse = await Axios({
        method: 'get',
        url: 'http://localhost:5555/api/user',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (getUserResponse.status !== 200) {
        this.setState({ isError: true, message: 'Error getting user.' });

      } else {
        this.setState({
          isError: false,
          isAuthenticated: true,
          user: getUserResponse.data.user
        }, this.props.history.push('/'));
      }
    }
  }

  onUserSignOut = async () => {

    const signOutResponse = await Axios({
      method: 'get',
      url: 'http://localhost:5555/api/user/signout',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (signOutResponse.status !== 200) {
      this.setState({ isError: true, message: 'Error signing out.' });

    } else {
      this.setState({
        isError: false,
        message: null,
        isAuthenticated: false,
        user: null
      }, this.props.history.push('/'));
    }
  }
};

App.propTypes = {
  history: propTypes.object.isRequired
};

export default withRouter(App);
