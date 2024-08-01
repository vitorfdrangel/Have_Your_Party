import { useState } from "react";

import useToast from "../hook/useToast";

import "./ForgotPass.css";

const ForgotPass = () => {
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      setEmail("");
      useToast("Link enviado com sucesso");
    }
  };

  return (
    <div className="forgot-pass">
      <h2>Redefinição de senha!</h2>
      <p>
        Informe seu email e enviaremos um link para a recuperação da sua senha
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <span>Email</span>
          <input
            type="email"
            placeholder="ex: me@gmail.com"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <input
          type="submit"
          value="Enviar link de recuperação"
          className="btn-secondary"
        />
      </form>
    </div>
  );
};

export default ForgotPass;
