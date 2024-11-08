import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Doar from "./pages/Doar";
import Combater from "./pages/Combater";
import Formulario from "./pages/Formulario";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Doar" element={<Doar />} />
        <Route path="/Combater" element={<Combater />} />
        <Route path="/Formulario" element={<Formulario />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
