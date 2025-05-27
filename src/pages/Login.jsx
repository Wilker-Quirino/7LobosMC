import "../assets/imagens/Floresta-estrada.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const navigate = useNavigate();
  return (
    <header className="container-login">
      <div className="voltar-container">
        <div className="voltar" onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faCircleLeft} />
        </div>
      </div>
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
