import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "../style.css";

const Galeria = () => {
  const navigate = useNavigate();
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/gallery")
      .then((response) => setImagens(response.data))
      .catch((error) => console.error("Erro ao buscar imagens:", error));
  }, []);

  return (
    <div className="container-gallery">
      <div className="back" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faCircleLeft} />
      </div>
      <h1>Galeria Moto Clube</h1>
      <div className="gallery">
        {imagens.map((img, index) => (
          <div key={index} className="card">
            <img src={img.image} alt={img.description} />
            <h3>{img.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;
