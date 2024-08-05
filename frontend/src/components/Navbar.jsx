import { Link, NavLink } from "react-router-dom";

import React from "react";

import "./NavBar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>Have Your Party!</h2>
      <ul>
        <li>
          <Link>Home / Login</Link>
        </li>
        {1 > 0 && (
          <li>
            <Link to={"/parties"}>Minhas Festas</Link>
          </li>
        )}
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
