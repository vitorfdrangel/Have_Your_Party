import partyFetch from "../axios/config";

import { useState, useEffect } from "react";

import { useNavigate, Link } from "react-router-dom";

import useToast from "../hook/useToast";

// Styles
import "./Login.css";

// Image
import image from "../images/party-image.png";

const Login = () => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(user, password);

    if (user && password) {
      navigate("/parties");
    }
  };
  return (
    <div className="login-container">
      <div className="left-container">
        <h2>Have Your Party!</h2>
        <p>Crie uma experiência do seu jeito</p>
        <img src={image} alt="Login HYP" />
      </div>
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="form-input">
            <label>
              <span>Usuário</span>
              <input
                type="text"
                placeholder="Digite o nome de usuário"
                onChange={(e) => setUser(e.target.value)}
                required
              />
            </label>
            <label>
              <span>Senha</span>
              <input
                type="password"
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <p>
            <Link to={"/login/forgot-pass"}>Esqueceu a senha?</Link>
          </p>
          <input type="submit" value="Entrar" className="btn" />
        </form>
        <p id="create-acc">
          Não tem uma conta? <Link to={"/login/create"}>Inscrever-se</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
