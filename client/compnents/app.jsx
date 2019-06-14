import React from 'react';
import { Route, Link } from 'react-router-dom';

import Dashboard from './dashboard';
import UserSignUp from './userSignUp';
import UserSignIn from './userSignIn';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inProgress: false,
      isError: false,
      message: '',
      isAuthenticated: false,
      user: null
    };
  }

  render() {
    return (
      <div>
        <header>
          <div>
            <Link to="/"><h1>MERN Authentication</h1></Link>
          </div>
          <div>
            <Link to="/dashboard">Dashboard</Link>
            <span>&nbsp; | &nbsp;</span>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>

        <main>
          <div style={{ marginTop: 10, fontSize: 21 }}>
            <p>
              Hello and welcome to MERN authentication. 
              <Link to="/dashboard">Click here</Link> you view your dashboard.
            </p>
          </div>

          <Route 
            exact
            path="/dashboard"
            render={() => <Dashboard isAuthenticated={this.state.isAuthenticated} />} 
          />
          <Route exact path="/signup" component={UserSignUp} />
          <Route exact path="/signin" component={UserSignIn} />
        </main>
      </div>
    );
  }
};

export default App;
