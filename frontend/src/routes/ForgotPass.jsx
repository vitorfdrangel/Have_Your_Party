import "./ForgotPass.css";

const ForgotPass = () => {
  return (
    <div className="forgot-pass">
      <h2>Redefinição de senha!</h2>
      <p>
        Informe seu email e enviaremos um link para a recuperação da sua senha
      </p>
      <form>
        <label>
          <span>Email</span>
          <input type="email" placeholder="Digite seu email" required />
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
