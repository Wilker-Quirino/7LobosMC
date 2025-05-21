const Login = () => {
  return (
    <header className="container-login">
      <div className="form-section">
        <h1>Faça seu login</h1>
        <section>
          <div className="login-space">
            <label>E-mail</label>
            <input id="email" name="email" type="email" />
            <label>Senha</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Senha"
            />
            <a href="/recuperar-senha" className="forgot-password">
              Esqueci minha senha!
            </a>
            <input type="submit" value="ENTRAR" />
            <div className="image-section"></div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Login;
