import React from 'react';
import Axios from 'axios';
import { Route, Link } from 'react-router-dom';

import Header from './header';
import Error from './error';
import Dashboard from './dashboard';
import UserSignUp from './userSignUp';
import UserSignIn from './userSignIn';


class App extends React.Component {
  constructor() {
    super();

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
        <Header />

        {this.state.isError &&
          <Error message={this.state.message} />
        }

        <main>
          <Route
            exact
            path="/"
            render={() => (
              <div style={{ marginTop: 10, fontSize: 21 }}>
                <p>
                  Hello {this.state.user ? this.state.user.name : 'guest'} and welcome to MERN authentication.
                  <Link to="/dashboard">Click here</Link> you view your dashboard.
                </p>
              </div>
            )}
          />

          <Route
            exact
            path="/dashboard"
            render={() => <Dashboard isAuthenticated={this.state.isAuthenticated} />}
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
        });
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
        });
      }
    }
  }
};

export default App;
