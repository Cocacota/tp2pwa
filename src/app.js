import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import DetallesProducto from "./pages/detalles/Detalles"; // Importa el componente de detalles de producto
import {RUTAS} from "./const/Routes"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={RUTAS.home} element={<Home />} />
        {/* Ruta para los detalles del producto */}
        <Route path= {RUTAS.detalles} element={<DetallesProducto />} />
      </Routes>
    </Router>
  );
};

export default App;
