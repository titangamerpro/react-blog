import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <form className="form">
        <input id="search" type="search" placeholder="search post" />
      </form>
      <ul className="menu">
        <li className="item">
            <Link to="/" className="link">Home</Link>
        </li>
        <li className="item">
            <Link className="link">Post</Link>
        </li>
        <li className="item">
            <Link to="/about" className="link">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
