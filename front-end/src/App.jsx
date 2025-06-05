import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Galeria from "./pages/Galeria.jsx";
import Noticias from "./pages/Noticias.jsx";
import Login from "./pages/Login.jsx";
import Sobre from "./components/Sobre.jsx";
import FundamentosConduta from "./pages/FundamentosConduta.jsx";
import EstruturaHieraquica from "./pages/EstruturaHieraquica.jsx";
import FaleConosco from "./pages/FaleConosco.jsx";

const App = () => {
  return (
    <BrowserRouter basename="/7LobosMC">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/FundamentosConduta" element={<FundamentosConduta />} />
        <Route path="/EstruturaHieraquica" element={<EstruturaHieraquica />} />
        <Route path="/FaleConosco" element={<FaleConosco />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
