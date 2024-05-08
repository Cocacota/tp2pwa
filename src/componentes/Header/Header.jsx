import style from "./Header.moduls.css";

import { useNavigate ,  useLocation} from "react-router-dom";
import { RUTAS } from "../../const/Routes";

const Header =({nombre})=>{
  const navigate = useNavigate();
  const location = useLocation();

  const redirectToHome = () => {
    console.log("boton")
    if (location.pathname !== RUTAS.home) {
      navigate(RUTAS.home);
    }
  };
 
  
  return(
    <div className="w-full h-24 bg-gray-800 text-white flex items-center justify-center">
      <div className="container mx-auto flex justify-around items-center">
        <div className="flex  justify-self-auto items-center">
        <button onClick={redirectToHome}>         
            <i className="material-icons icon">home</i>
        </button>
        <button onClick={redirectToHome} className="text-xl font-semibold mx-12">zapatillas NQN</button>
        </div>
        <nav>
          <ul className="flex space-x-16">
            <li><a className="hover:text-gray-300">Inicio</a></li>
            <li><a className="hover:text-gray-300">Acerca de</a></li>
            <li><a className="hover:text-gray-300">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default Header;