import React from 'react';
import { Link } from 'react-router-dom';

const UserSignIn = () => (
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
        <button>Sign In</button>
      </div>

    </form>
  </div>
);

export default UserSignIn;
