import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Historia from "./pages/Historia.jsx";
import Voduns from "./pages/Voduns.jsx";
import Terreiros from "./pages/Terreiros.jsx";
import Bibliografia from "./pages/Bibliografia.jsx";
import Cantigas from "./pages/Cantigas.jsx";
import Homenagens from "./pages/Homenagens.jsx";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/voduns" element={<Voduns />} />
        <Route path="/terreiros" element={<Terreiros />} />
        <Route path="/bibliografia" element={<Bibliografia />} />
        <Route path="/cantigas" element={<Cantigas />} />
        <Route path="/homenagens" element={<Homenagens />} />
        <Route path="*" element={<h2>Página não encontrada (404)</h2>} />
      </Routes>
    </Router>
  );
}
