import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Text from "../../componentes/Text/Text";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
const DetallesProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    // Realizar la solicitud Fetch para obtener los detalles del producto
    fetch(`/mock/zapatillas-${id}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`No se pudo obtener los detalles del producto ${id}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducto(data);
      })
      .catch((error) =>
        console.error("Error al cargar los detalles del producto:", error)
      );
  }, [id]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  const mostrarColores = (colores) => {
    if (Array.isArray(colores)) {
      if (colores.length === 1) {
        return colores[0];
      } else {
        return colores.join(", ");
      }
    } else {
      return colores;
    }
  };

  return (
  <div className="w-screem h-screem">
  <Header />
    <div className="flex items-center justify-center min-h-screen">
      
      <div className="bg-white max-w-md w-full rounded-lg shadow-lg p-8">
        <img
          src={`${producto.images}`}
          alt={producto.nombre}
          className="w-full mb-4 rounded-lg"
        />
        <h1 className="text-gray-900 font-semibold text-3xl mb-5 text-center">
          {producto.marca} {producto.modelo}
        </h1>
        <p className="text-gray-900 font-bold text-xl mb-2">
          Precio: {producto.precio}
        </p>
        <Text text={`Marca: ${producto.marca}`}/>
        <Text text={`Material: ${producto.material}`}/>
        <Text text={`Género: ${producto.genero}`}/>
        <Text text={`Edad: ${producto.edad}`}/>
        <Text text={`Color: ${mostrarColores(producto.color)}`}/>        
        <Text text={`Talles disponibles: ${producto.tallesDisponibles}`}/>
                
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default DetallesProducto;
