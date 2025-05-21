import "../assets/imagens/Floresta-estrada.png";

const Login = () => {
  return (
    <header className="container-login">
      <div className="form-section">
        <h1>Faça seu login</h1>
        <section>
          <div className="login-space">
            <label htmlFor="email">E-mail</label>
            <div className="input-wrapper">
              <input id="email" name="email" type="email" />
            </div>
            <label htmlFor="password">Senha</label>
            <div className="input-wrapper">
              <input id="password" name="password" type="password" />
            </div>
            <a href="/recuperar-senha" className="forgot-password">
              Esqueci minha senha!
            </a>
            <input type="submit" value="ENTRAR" className="login-button" />
          </div>
        </section>
      </div>
      <div className="image-section"></div>
    </header>
  );
};

export default Login;
