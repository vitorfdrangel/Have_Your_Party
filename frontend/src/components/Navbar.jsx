import { NavLink } from "react-router-dom";

import React from "react";

import "./NavBar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>Have Your Party!</h2>
      <ul>
        <li>
          <NavLink to={"/"}>Início / Login</NavLink>
        </li>
        <li>
          <NavLink to={"/parties"}>Minhas Festas</NavLink>
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
