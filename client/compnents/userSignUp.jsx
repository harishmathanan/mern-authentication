import React from 'react';

const UserSignUp = () => (
  <div>
    <h3>Register a new account</h3>
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Please enter your name" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Please enter your email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Please enter your password" />
      </div>

      <div>
        <button>Register</button>
      </div>
    </form>
  </div>
);

export default UserSignUp;
