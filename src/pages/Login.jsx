const Login = () => {
  return (
    <header className="container-login">
      <h1 className="text-login">Faça seu login</h1>
      <section>
        <div className="login-space">
          <input id="email" name="email" type="text" placeholder="Email" />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
          />
          <input type="submit" value="ENTRAR" />
          <a href="/recuperar-senha" className="forgot-password">
            Esqueci minha senha!
          </a>
        </div>
      </section>
    </header>
  );
};

export default Login;
