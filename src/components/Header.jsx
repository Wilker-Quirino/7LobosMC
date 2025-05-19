import { Link } from "react-router-dom";
import lobo from "../assets/imagens/LOBO.png";
import "../style.css";

const Header = () => {
  return (
    <div className="header-background__image">
      <header className="container">
        <div className="button-login">
          <Link to="/login" className="login">
            Login
          </Link>
        </div>
        <div className="lobo">
          <img src={lobo} alt="Lobo com cicatris" />
        </div>
        <div>
          <h1>7 LOBOS M.C.</h1>
        </div>
        <div className="top-bar">
          <Link to="/galeria" className="button-gallery">
            Galeria
          </Link>
          <Link to="/noticias" className="button-news">
            Notícias
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
