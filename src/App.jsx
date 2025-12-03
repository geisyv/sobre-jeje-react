import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Voduns from "./pages/Voduns";
import Terreiros from "./pages/Terreiros";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/voduns" element={<Voduns />} />
        <Route path="/terreiros" element={<Terreiros />} />
      </Routes>
    </Router>
  );
}
