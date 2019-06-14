import React from 'react';

import UserSignUp from './userSignUp';
import UserSignIn from './userSignIn';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div><h1>MERN Authentication</h1></div>
          <div>
            <a href="#">Sign In</a>
            <span>&nbsp; | &nbsp;</span>
            <a href="#">Register</a>
          </div>
        </header>

        <main>
          <div style={{ marginTop: 10, fontSize: 21 }}>
            <p>
              Hello and welcome to MERN authentication. 
              <a href="#">Click here</a> you view your dashboard.
            </p>
          </div>

          <UserSignUp />
          <UserSignIn />
        </main>
      </div>
    );
  }
};

export default App;
