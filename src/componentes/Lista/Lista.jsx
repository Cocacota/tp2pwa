
import { useNavigate } from "react-router-dom";
import Tarjeta from "../Tarjeta/Tarjeta";
import "../../App.css";

const Lista = ({zapatillas}) => {
  
  const navigate = useNavigate();
  //const [list,setList]= useState([])
  
  const handleDetallesClick = (id) => {
    // Navegar a la página de detalles del producto con el ID
    navigate(`/producto/${id}`);
  };
  /*useEffect(()=>{
    setList(zapatillas);
  },[zapatillas])*/

  return (
    <>
      {console.log(zapatillas.length)}
      <div className="flex items-center justify-center min-h-screen container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 px-10">
          {zapatillas.length > 0 ? (
            zapatillas.map((zapatilla) => (
              <Tarjeta
                key={zapatilla.id}
                producto={zapatilla}
                onDetallesClick={() => handleDetallesClick(zapatilla.id)}
              />
            ))
          ) : (
            <p className="items-center">No se encontraron productos</p>
          )
        }
        </div>
      </div>
    </>
  );
};

export default Lista;
