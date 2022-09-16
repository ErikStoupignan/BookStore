import './Navbar.scss';
import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => (
  <div className="NavBarContainer">
    <div>
      <h1>Some Books</h1>
    </div>
    <div className="LinksContainer">
      <Link className="bookLink" to="/">Books</Link>
      <Link className="CategoriesLink" to="/Categories">Categories</Link>
    </div>
  </div>
);

export default Navbar;
