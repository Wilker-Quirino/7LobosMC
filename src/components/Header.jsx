import { Link } from "react-router-dom";
import lobo from "../assets/imagens/LOBO.png";
import "../style.css";
import Sobre from "./Sobre";
import React, { useState } from "react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="header-font">
      <div className="header-background__image">
        <Link to="/login" className="button-login">
          Login
        </Link>

        <div className="lobo">
          <img src={lobo} alt="Lobo com cicatriz" />
          <div className="club-name">
            <h1>7 LOBOS M.C.</h1>
          </div>
        </div>

        {/* Ícone hamburguer */}
        <button className="menu-hamburguer" onClick={alternarMenu}>
          &#9776;
        </button>

        {/* Menu de links */}
        <nav className={`button-container ${menuAberto ? "ativo" : ""}`}>
          <Link to="/galeria">Galeria</Link>
          <Link to="/noticias">Notícias</Link>
          <Link to="/CodigoConduta">Conduta</Link>
          <Link to="/EstruturaHieraquica">Hierarquia</Link>
          <Link to="/FundamentosEstrutura">Fundamentos</Link>
          <Link to="/FaleConosco">Fale Conosco</Link>
        </nav>
      </div>
      <Sobre />
    </header>
  );
};

export default Header;
