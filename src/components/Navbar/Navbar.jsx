import './Navbar.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import { FcGlobe } from 'react-icons/fc';

const Navbar = () => (
  <div className="NavBarContainer">
    <div className="Container_titleNavBar_Links">
      <h className="titleNavBar">B-Store ESSB</h>
      <div className="LinksContainer">
        <Link className="Links_Navbar" to="/">Books</Link>
        <Link className="Links_Navbar" to="/Categories">Categories</Link>
      </div>
    </div>
    <a className="IconNavBar" target="_blank" href="https://github.com/ErikStoupignan" rel="noreferrer">
      <FcGlobe className="IconNavBar App-logo" />
    </a>
  </div>
);

export default Navbar;
