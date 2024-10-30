import partyFetch from "../axios/config";

import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import useToast from "../hook/useToast";

import "./CreateAcc.css";

const CreateAcc = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState(null);
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const createAccount = async () => {
      try {
        const newAcc = {
          name,
          password,
          date,
          city,
          gender,
          email,
        };

        const res = await partyFetch.post("/user/create", newAcc);

        if (res.status === 201) {
          navigate("/");

          useToast(res.data.msg);
        }
      } catch (error) {
        console.log(error);
      }
    };

    createAccount();
  };

  return (
    <div className="create-acc">
      <h2>Criar nova conta</h2>
      <p>Junte-se a nós e faça do seu evento uma lembrança extraordinária!</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <span>Nome de usuário</span>
          <input
            type="text"
            placeholder="ex: Vitor98"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            placeholder="Digite sua senha"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label>
          <span>Data de nascimento</span>
          <input
            type="date"
            required
            onChange={(e) => setDate(e.target.value)}
            value={date || ""}
          />
        </label>
        <label>
          <span>Cidade</span>
          <input
            type="text"
            placeholder="Digite sua localização"
            required
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <p id="city">ex: Rio de Janeiro, RJ</p>
        </label>
        <div className="radio-container">
          <p>Selecione seu gênero</p>
          <div className="radio-input">
            <label>
              <input
                type="radio"
                required
                name="gender"
                id="masculino"
                value="Masculino"
                onChange={(e) => {
                  e.target.checked && setGender("Masculino");
                }}
              />
              <span>Masculino</span>
            </label>
            <label>
              <input
                type="radio"
                required
                name="gender"
                id="feminino"
                value="Feminino"
                onChange={(e) => {
                  e.target.checked && setGender("Feminino");
                }}
              />
              <span>Feminino</span>
            </label>
          </div>
        </div>
        <label>
          <span>E-mail</span>
          <input
            type="email"
            required
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <input type="submit" value="Criar conta" className="btn-secondary" />
      </form>
      <p id="to-login">
        Já possui uma conta? <Link to={"/"}>faça login</Link>
      </p>
    </div>
  );
};

export default CreateAcc;
