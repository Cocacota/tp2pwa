import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Text from "../Text/Text";

const Tarjeta = ({ producto }) => {
  const navigate = useNavigate();

  // Función de manejo de clic del botón
  const handleDetallesClick = () => {
    // Navegar a la página de detalles del producto
    navigate(`/zapatillas/${producto.id}`);
  };

  return (
    <div className=" border border-gray-950 rounded overflow-hidden shadow-lg mb-10 mt-5  bg-white">
      <img className="w-full h-80" src={producto.images} alt={producto.marca} />
      <div className="px-6 py-4">
        <h4 className="font-bold text-xl mb-2">Zapatilla {producto.marca}</h4>
        <Text text={`Precio: ${producto.precio}`}/>
      </div>
      {/* Botón de detalles */}
      <div className="px-6 py-4">
        <Button onClick={handleDetallesClick} text={"Mas detalles"}/>
          
        
      </div>
    </div>
  );
};

export default Tarjeta;
