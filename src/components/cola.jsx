<div>
  <Header />

  <div className="content">
    <h2 className="title-icon">Fundamentos e Estrutura</h2>
    <p>
      O 7 Lobos MC nasceu sobre sete princípios fundamentais, definidos por seus
      membros fundadores e seguidos com honra por todos que vestem nosso colete:
      Família, Honra, Lealdade, Liberdade, Respeito, Irmandade e Igualdade
    </p>
    <h2 className="title-icon">Código de Conduta</h2>
    <ul>
      <li>
        Proteger, respaldar e ajudar qualquer irmão do motoclube é questão de
        ordem.
      </li>
      <li>O mesmo compromisso se estende à família de cada irmão.</li>
      <li>
        O colete é de propriedade do membro; os patches são fornecidos pelo MC.
      </li>
      <li>Padrão do colete: preto com dois bolsos frontais, jeans ou couro.</li>
      <li>
        Os patches são entregues em sequência hierárquica, do Alfa ao Sétimo
        Guardião.
      </li>
    </ul>
    <h2 className="title-icon">Estrutura Hieráquica e os 7 Símbolos</h2>
    <p>
      A hierarquia do 7 Lobos MC é composta por sete cargos. Cada um representa
      um princípio e carrega a responsabilidade de mantê-lo vivo.
    </p>
    <h2 className="title-icon">Alfa </h2>
    <p>
      Líder do motoclube. Decide junto ao conselho, mas tem a palavra final.
      Responsável por preservar os laços familiares dentro do MC.
    </p>
    <h2 className="title-icon">Conselheiro</h2>
    <p>
      Segundo no comando. Auxilia o Alfa e lidera na sua ausência. Mantém a
      integridade e o respeito no MC.
    </p>
    <h2 className="title-icon">Tesoureiro</h2>
    <p>
      Responsável pelas finanças. Presta contas ao conselho todo dia 20. Garante
      transparência e lealdade financeira.
    </p>
    <h2 className="title-icon">Caçador</h2>
    <p>
      Líder da segurança. Membros armados legalmente são caçadores. Responsáveis
      pela proteção dos irmãos e suas famílias.
    </p>
    <h2 className="title-icon">Primeiro Guardião</h2>
    <p>
      Protege tradições e escudeiros. Avalia novos membros. Zela pelo respeito
      dentro do MC.
    </p>
    <h2 className="title-icon">Segundo Guardião</h2>
    <p>Reforça laços entre irmãos e protege o MC junto ao Primeiro Guardião.</p>
    <h2 className="title-icon">Terceiro Guardião</h2>
    <p>Garante que todos tenham voz e vez, independente do tempo de estrada.</p>
    <div className="button-base">
      <TopButton />
    </div>
  </div>
  <Footer />
</div>;

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
</header>;
