import './Navbar.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';

const Navbar = () => (
  <div className="NavBarContainer">
    <div className="Container_titleNavBar_Links">
      <h className="titleNavBar">B-Store ESSB</h>
      <div className="LinksContainer">
        <Link className="Links_Navbar" to="/">BOOKS</Link>
        <Link className="Links_Navbar" to="/Categories">CATEGORIES</Link>
      </div>
    </div>
    <a className="IconNavBar" target="_blank" href="https://github.com/ErikStoupignan" rel="noreferrer">
      <BsFillPersonFill className="Icon_user" />
    </a>
  </div>
);

export default Navbar;
