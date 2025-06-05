import { useState } from "react";

const ResetSenha = () => {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const handleResetSenha = async (e) => {
    e.preventDefault();
    setMensagem("");
    setErro("");

    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:4001/api/reset-senha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Autenticação
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMensagem(data.message);
      } else {
        setErro(data.message || "Erro ao resetar senha.");
      }
    } catch (error) {
      setErro("Erro na conexão com o servidor.");
    }
  };

  return (
    <div className="container-reset-senha">
      <h1>Resetar Senha de Usuário</h1>
      <form onSubmit={handleResetSenha}>
        <label htmlFor="email">E-mail do Usuário:</label>
        <input
          type="email"
          id="email"
          placeholder="usuario@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Resetar Senha</button>
      </form>

      {mensagem && <p className="success-message">{mensagem}</p>}
      {erro && <p className="error-message">{erro}</p>}
    </div>
  );
};

export default ResetSenha;
