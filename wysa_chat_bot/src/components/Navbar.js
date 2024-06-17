import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (

    <div className="contain">
      <ul className="navbar">
        <li className="nav-item">
          <NavLink className="nav-link" exact aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/Login">
            login
          </NavLink>
        </li>
        <li className="component">
          <button
          // onClick={ChangeBg}
          >       Lets change BGColor
          </button>
        </li>
      </ul>
    </div>

  )
};


export default Navbar;
