import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="row">
    <div className="col-md-12">
      <Link to="/"><h1>MERN Authentication</h1></Link>
    </div>

    <div className="col-md-12">
      <Link to="/dashboard">Dashboard</Link>
      <span>&nbsp; | &nbsp;</span>
      <Link to="/signin">Sign In</Link>
    </div>
  </header>
);

export default Header;
