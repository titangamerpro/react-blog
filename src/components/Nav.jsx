import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navItems = [
    {
        name:"Home",
        path:"/"
    },
    {
        name:"About",
        path:"/about"
    },
    {
        name:"Post",
        path:"/post"
    },
    {
        name:"Contact",
        path:"/contact"
    }
  ]
  
  return (

    <nav className="nav">
      <form className="form">
        <input id="search" type="search" placeholder="search post" />
      </form>
      <ul className="menu">
        {navItems.map((item, index) => (
          <li className="item" key={index}>
            <Link to={item.path} className="link">{item.name}</Link>
        </li>
        ))}
        
      </ul>
    </nav>
  );
};

export default Nav;
