import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import useToast from "../hook/useToast";

import "./CreateAcc.css";

const CreateAcc = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="create-acc">
      <h2>Criar nova conta</h2>
      <p>Junte-se a nós e faça do seu evento uma lembrança extraordinária!</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <span>Nome</span>
          <input
            type="text"
            placeholder="Digite seu nome"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Data de nascimento</span>
          <input
            type="date"
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          <span>Cidade</span>
          <input
            type="text"
            placeholder="Digite sua localização"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <p id="city">ex: Rio de Janeiro, Brasil</p>
        </label>
        <label>
          <span>E-mail</span>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <div className="radio-container">
          <p>Selecione seu gênero</p>
          <label>
            <input
              type="radio"
              name="gender"
              id="masculino"
              value="Masculino"
            />
            <span>Masculino</span>
          </label>
          <label>
            <input type="radio" name="gender" id="feminino" value="Feminino" />
            <span>Feminino</span>
          </label>
        </div>
        <input type="submit" value="Criar conta" className="btn-secondary" />
      </form>
    </div>
  );
};

export default CreateAcc;
