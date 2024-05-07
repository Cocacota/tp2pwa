import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lista from "./componentes/Lista/Lista";
import DetallesProducto from "./pages/detalles/Detalles"; // Importa el componente de detalles de producto

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lista />} />
        {/* Ruta para los detalles del producto */}
        <Route path="/zapatillas/:id" element={<DetallesProducto />} />
      </Routes>
    </Router>
  );
};

export default App;
