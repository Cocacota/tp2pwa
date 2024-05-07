import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "../Filter/Filter";
import Tarjeta from "../Tarjeta/Tarjeta";
import "../../App.css";

const Lista = () => {
  const [zapatillas, setZapatillas] = useState([]);
  const [filtro, setFiltro] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Realizar la solicitud Fetch para obtener los datos de zapatillas.json
    fetch("/mock/zapatillas.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudieron cargar los datos de las zapatillas");
        }
        return response.json();
      })
      .then((data) => setZapatillas(data.zapatillas))
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

  const filtrarZapatillas = (filtro) => {
    setFiltro(filtro);
  };

  const handleDetallesClick = (id) => {
    // Navegar a la página de detalles del producto con el ID
    navigate(`/producto/${id}`);
  };

  const zapatillasFiltradas = zapatillas.filter((zapatilla) =>
    zapatilla.marca.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
      <h1 className="flex justify-center text-5xl mt-16">Zapatillas NQN</h1>
      <div className="flex justify-center mt-10">
        <Filter onFilter={filtrarZapatillas} />
      </div>

      <div className="flex items-center justify-center min-h-screen container mx-auto">
        <div className="grid grid-cols-4 gap-4 mt-4 px-10">
          {zapatillasFiltradas.length > 0 ? (
            zapatillasFiltradas.map((zapatilla) => (
              <Tarjeta
                key={zapatilla.id}
                producto={zapatilla}
                onDetallesClick={() => handleDetallesClick(zapatilla.id)}
              />
            ))
          ) : (
            <p className="items-center">No se encontraron productos</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Lista;
