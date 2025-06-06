import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

const EstruturaHieraquica = () => {
  const navigate = useNavigate();
  return (
    <div className="container-hierarchy">
      <div className="back" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faCircleLeft} />
      </div>
      <h2>Estrutura Hieráquica e os 7 Símbolos</h2>
      <p>
        A hierarquia do 7 Lobos MC é composta por sete cargos. Cada um
        representa um princípio e carrega a responsabilidade de mantê-lo vivo.
      </p>
      <div className="alfa">
        <h2>Alfa </h2>
        <p>
          Líder do motoclube. Decide junto ao conselho, mas tem a palavra final.
          Responsável por preservar os laços familiares dentro do MC.
        </p>
      </div>
      <div className="counselor">
        <h2>Conselheiro</h2>
        <p>
          Segundo no comando. Auxilia o Alfa e lidera na sua ausência. Mantém a
          integridade e o respeito no MC.
        </p>
      </div>
      <div className="treasurer">
        <h2>Tesoureiro</h2>
        <p>
          Responsável pelas finanças. Presta contas ao conselho todo dia 20.
          Garante transparência e lealdade financeira.
        </p>
      </div>
      <div className="hunter">
        <h2>Caçador</h2>
        <p>
          Líder da segurança. Membros armados legalmente são caçadores.
          Responsáveis pela proteção dos irmãos e suas famílias.
        </p>
      </div>
      <div className="first-guardian">
        <h2>Primeiro Guardião</h2>
        <p>
          Protege tradições e escudeiros. Avalia novos membros. Zela pelo
          respeito dentro do MC.
        </p>
      </div>
      <div className="second-guardian">
        <h2>Segundo Guardião</h2>
        <p>
          Reforça laços entre irmãos e protege o MC junto ao Primeiro Guardião.
        </p>
      </div>
      <div className="third-guardian">
        <h2>Terceiro Guardião</h2>
        <p>
          Garante que todos tenham voz e vez, independente do tempo de estrada.
        </p>
      </div>
    </div>
  );
};

export default EstruturaHieraquica;
