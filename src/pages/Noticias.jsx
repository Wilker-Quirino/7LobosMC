import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

const Noticias = () => {
  const navigate = useNavigate();
  return <div>Noticias</div>;
  <div className="voltar-container">
    <div className="voltar" onClick={() => navigate(-1)}>
      <FontAwesomeIcon icon={faCircleLeft} />
    </div>
  </div>;
};

export default Noticias;
