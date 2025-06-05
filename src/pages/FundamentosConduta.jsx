import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

const FundamentosConduta = () => {
  const navigate = useNavigate();
  return (
    <div className="conduct">
      <div className="back" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faCircleLeft} />
      </div>
      <h2>Fundamentos e Estrutura</h2>
      <p>
        O 7 Lobos MC nasceu sobre sete princípios fundamentais, definidos por
        seus membros fundadores e seguidos com honra por todos que vestem nosso
        colete: Família, Honra, Lealdade, Liberdade, Respeito, Irmandade e
        Igualdade
      </p>
      <h2>Código de Conduta</h2>
      <ul>
        <li>
          Proteger, respaldar e ajudar qualquer irmão do motoclube é questão de
          ordem.
        </li>
        <li>O mesmo compromisso se estende à família de cada irmão.</li>
        <li>
          O colete é de propriedade do membro; os patches são fornecidos pelo
          MC.
        </li>
        <li>
          Padrão do colete: preto com dois bolsos frontais, jeans ou couro.
        </li>
        <li>
          Os patches são entregues em sequência hierárquica, do Alfa ao Sétimo
          Guardião.
        </li>
      </ul>
    </div>
  );
};

export default FundamentosConduta;
