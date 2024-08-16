import partyFetch from "../axios/config";

import { useState, useEffect, useContext } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";

// Context
import { UserContext } from "../context/UserContext";

import "./NavBar.css";

const Navbar = () => {
  const { dataUser } = useContext(UserContext);

  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  // Load User
  const getUser = async () => {
    try {
      const res = await partyFetch.get("/user");

      setUserData(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (!dataUser.user || !dataUser.password) {
      navigate("/");
    }
  }, []);

  return (
    <nav id="navbar">
      <h2>Have Your Party!</h2>
      <ul>
        {(dataUser.user === undefined ||
          dataUser.password !== userData.password ||
          dataUser.user !== userData.name) && (
          <li>
            <Link to={"/"}>Home / Login</Link>
          </li>
        )}
        {dataUser.user !== undefined &&
          dataUser.password === userData.password &&
          dataUser.user === userData.name && (
            <div className="welcome-container">
              <li>
                <p>Bem-vindo, {dataUser.user}</p>
              </li>
              <li>
                <NavLink to={"/parties"}>Minhas Festas</NavLink>
              </li>
              <li>
                <NavLink to={"/party/new"} className="btn">
                  Criar Festa
                </NavLink>
              </li>
            </div>
          )}
      </ul>
    </nav>
  );
};

export default Navbar;
