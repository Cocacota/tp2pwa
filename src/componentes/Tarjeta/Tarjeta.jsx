import React from "react";
import { useNavigate } from "react-router-dom";

const Tarjeta = ({ producto }) => {
  const navigate = useNavigate();

  // Función de manejo de clic del botón
  const handleDetallesClick = () => {
    // Navegar a la página de detalles del producto
    navigate(`/zapatillas/${producto.id}`);
  };

  return (
    <div className=" border border-gray-950 rounded overflow-hidden shadow-lg mb-10 mt-5">
      <img className="w-full" src={producto.images} alt={producto.marca} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Zapatilla {producto.marca}</div>
        <p className="font-bold text-base mb-4">Precio: {producto.precio}</p>
      </div>
      {/* Botón de detalles */}
      <div className="px-6 py-4">
        <button onClick={handleDetallesClick} className="todo-btn">
          Detalles
        </button>
      </div>
    </div>
  );
};

export default Tarjeta;
