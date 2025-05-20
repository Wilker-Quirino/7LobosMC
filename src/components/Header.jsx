import { Link } from "react-router-dom";
import lobo from "../assets/imagens/LOBO.png";
import "../style.css";

const Header = () => {
  return (
    <header className="header-font">
      <div className="header-background__image">
        <Link to="/login" className="button-login">
          Login
        </Link>

        <div className="lobo">
          <img src={lobo} alt="Lobo com cicatris" />
          <div className="club-name">
            <h1>7 LOBOS M.C.</h1>
          </div>
        </div>

        <div className="button-container">
          <Link to="/galeria" className="button-gallery">
            Galeria
          </Link>

          <Link to="/noticias" className="button-news">
            Notícias
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
