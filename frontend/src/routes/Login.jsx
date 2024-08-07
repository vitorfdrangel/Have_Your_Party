import partyFetch from "../axios/config";

import { useState, useEffect, useContext } from "react";

import { useNavigate, Link } from "react-router-dom";

import useToast from "../hook/useToast";

// Context
import { UserContext } from "../context/UserContext";

// Styles
import "./Login.css";

// Image
import image from "../images/party-image.png";

const Login = () => {
  const { dataUser, setDataUser } = useContext(UserContext);

  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  // Load Users
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

  const handleLogin = (e) => {
    e.preventDefault();

    setDataUser({ user, password });

    if (!userData) return;

    if (user === userData.name && password === userData.password) {
      navigate("/parties");
    } else {
      useToast("Usuário e/ou senha inválido(s)", "error");
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
                minLength={4}
                maxLength={10}
                required
              />
            </label>
            <label>
              <span>Senha</span>
              <input
                type="password"
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                maxLength={16}
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
