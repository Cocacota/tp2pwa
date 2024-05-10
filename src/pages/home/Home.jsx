import Lista from "../../componentes/Lista/Lista";
import Filter from "../../componentes/Filter/Filter"
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import FiltroColor from "../../componentes/FiltroColor/FiltroColor";
import React, { useState, useEffect } from "react";
const Home = () => {
  const [zapatillas, setZapatillas] = useState([]);
  const [marcaFiltro, setMarcaFiltro] = useState('');
  const [coloresSeleccionados, setColoresSeleccionados] = useState([]);

  


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
const handleMarcaChange = (marca) => {
    setMarcaFiltro(marca);
  };

  const handleColorChange = (color,check) => {

    if (check) {
      setColoresSeleccionados([...coloresSeleccionados, color]);
    } else {
      setColoresSeleccionados(coloresSeleccionados.filter(colors => colors !== color));
    }
   
  };
 
  
  const filtrarZapatillas = (zapatillas, marca, colores) => {
    return zapatillas.filter(zapatilla =>
      (marca === '' || zapatilla.marca.toLowerCase().includes(marca.toLowerCase())) &&
      (colores.length === 0 || colores.some(color => zapatilla.color.includes(color)))
    );
  };

  const arregloFiltrado = filtrarZapatillas(zapatillas, marcaFiltro, coloresSeleccionados);


  
  return (

    <div className="relative w-full">
      <Header />
      <div className="flex justify-center mt-10 items-center">
        
        <Filter onFilter={handleMarcaChange} />
        
        <FiltroColor onColorChange={handleColorChange} color={"rojo"} />
        <FiltroColor onColorChange={handleColorChange} color={"blanco"} />
        <FiltroColor onColorChange={handleColorChange} color={"azul"} />
        <FiltroColor onColorChange={handleColorChange} color={"negro"} />

      </div>
      
      <Lista zapatillas={arregloFiltrado}/>
      <Footer/>
    </div>
  );
};

export default Home;
