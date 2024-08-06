import { Link, NavLink } from "react-router-dom";

import React from "react";

import "./NavBar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>Have Your Party!</h2>
      <ul>
        <li>
          <Link to={"/"}>Home / Login</Link>
        </li>
        <li>
          <NavLink to={"/party/new"} className="btn">
            Criar Festa
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
