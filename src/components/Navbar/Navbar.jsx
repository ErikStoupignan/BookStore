import './Navbar.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => (
  <div>
    <div>
      <h1>Navbar!</h1>
    </div>
    <div>
      <Link to="/Books">Books</Link>
      <Link to="/Categories">Categories</Link>
    </div>
  </div>
);

export default Navbar;
