import "../assets/imagens/Floresta-estrada.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = async (e) => {
    e.preventDefalt();

    try {
      const response = await fetch("http://localhost:40001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        // Salvar token e role no localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("nome", data.nome);

        // Redirecionar conforme o role
        if (data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      } else {
        setErro(data.message || "Email ou senha incorretos.");
      }
    } catch (error) {
      setErro("Erro de conexão com o servidor.");
      console.error("Erro no login:", error);
    }
  };

  return (
    <header className="container-login">
      <div className="back" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faCircleLeft} />
      </div>
      <div className="form-section">
        <h1>Faça seu login</h1>
        <section>
          <form onSubmit={handleLogin} className="login-space">
            <label htmlFor="email">E-mail</label>
            <div className="input-wrapper">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <label htmlFor="password">Senha</label>
            <div className="input-wrapper">
              <input
                id="password"
                name="password"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>

            <a href="/recuperar-senha" className="forgot-password">
              Esqueci minha senha!
            </a>

            {erro && <p className="error-message">{erro}</p>}

            <input type="submit" value="ENTRAR" className="login-button" />
          </form>
        </section>
      </div>

      <div className="image-section"></div>
    </header>
  );
};

export default Login;
