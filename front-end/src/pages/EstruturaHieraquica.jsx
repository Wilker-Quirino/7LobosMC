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
      <div className="all">
        <div className="title-hierarchy">
          <h1>Estrutura Hieráquica e os 7 Símbolos</h1>
          <p>
            A hierarquia do 7 Lobos MC é composta por sete cargos. Cada um
            representa um princípio e carrega a responsabilidade de mantê-lo
            vivo.
          </p>
        </div>
        <div className="alfa esquerda">
          <img src="./src/assets/imagens/ALFA.jpg" alt="foto do alfa" />
          <h2>Alfa </h2>
          <p className="grid-item">
            Líder do motoclube. Decide junto ao conselho, mas tem a palavra
            final. Responsável por preservar os laços familiares dentro do MC.
          </p>
        </div>
        <div className="counselor direita">
          <img src="./src/assets/imagens/ALFA.jpg" alt="foto do Conselheiro" />
          <h2>Conselheiro</h2>
          <p className="grid-item">
            Segundo no comando. Auxilia o Alfa e lidera na sua ausência. Mantém
            a integridade e o respeito no MC.
          </p>
        </div>
        <div className="treasurer esquerda">
          <img src="./src/assets/imagens/ALFA.jpg" alt="foto do Tesoureiro" />
          <h2>Tesoureiro</h2>
          <p className="grid-item">
            Responsável pelas finanças. Presta contas ao conselho todo dia 20.
            Garante transparência e lealdade financeira.
          </p>
        </div>
        <div className="hunter direita">
          <img src="./src/assets/imagens/ALFA.jpg" alt="foto do Caçador" />
          <h2>Caçador</h2>
          <p className="grid-item">
            Líder da segurança. Membros armados legalmente são caçadores.
            Responsáveis pela proteção dos irmãos e suas famílias.
          </p>
        </div>
        <div className="first-guardian esquerda">
          <img
            src="./src/assets/imagens/ALFA.jpg"
            alt="foto do first-guardian"
          />
          <h2>Primeiro Guardião</h2>
          <p className="grid-item">
            Protege tradições e escudeiros. Avalia novos membros. Zela pelo
            respeito dentro do MC.
          </p>
        </div>
        <div className="second-guardian direita">
          <img
            src="./src/assets/imagens/ALFA.jpg"
            alt="foto do second-guardian"
          />
          <h2>Segundo Guardião</h2>
          <p className="grid-item">
            Reforça laços entre irmãos e protege o MC junto ao Primeiro
            Guardião.
          </p>
        </div>
        <div className="third-guardian esquerda">
          <img
            src="./src/assets/imagens/ALFA.jpg"
            alt="foto do third-guardian"
          />
          <h2>Terceiro Guardião</h2>
          <p className="grid-item">
            Garante que todos tenham voz e vez, independente do tempo de
            estrada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EstruturaHieraquica;
