import { useEffect, useState } from "react";
import wolfIcon from "../assets/logo/Logo.png";
import "../style.css";

function TopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button onClick={scrollToTop} className="button-base2">
        <img src={wolfIcon} alt="Voltar ao topo" className="icone-topo" />
      </button>
    )
  );
}

export default TopButton;
