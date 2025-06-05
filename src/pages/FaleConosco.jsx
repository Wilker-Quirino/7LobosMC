import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

function FaleConosco() {
  const navigate = useNavigate();

  return (
    <div className="container-speak">
      <div className="back" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faCircleLeft} />
      </div>
      <div className="form-speak">
        <h2>Fale Conosco</h2>
        <p>Preencha o formulário e entraremos em contato!</p>
        <form>
          <label htmlFor="nome">
            Nome
            <span className="mandatory"> (obrigatório)</span>
            <input type="text" required />
          </label>

          <label htmlFor="email">
            E-mail
            <span className="mandatory"> (obrigatório)</span>
            <input type="email" required />
          </label>

          <label htmlFor="assunto">
            Assunto
            <span className="mandatory"> (obrigatório)</span>
            <input type="text" required />
          </label>

          <label htmlFor="mensagem">
            <textarea placeholder="Escreva sua mensagem..." required></textarea>
          </label>
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default FaleConosco;
