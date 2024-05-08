import Style from "./FiltroColor.moduls.css";
import { useState } from "react";
const FiltroColor = ({ onColorChange,color }) => {
  const [coloresSeleccionados, setColoresSeleccionados] = useState([]);

  const handleColorChange = (event) => {
    const colorSeleccionado = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setColoresSeleccionados([...coloresSeleccionados, colorSeleccionado]);
    } else {
      setColoresSeleccionados(coloresSeleccionados.filter(color => color !== colorSeleccionado));
    }

    onColorChange(coloresSeleccionados);
  };
  return(
    <label>
        <input type="checkbox" value={color} onChange={handleColorChange} />
        {color}
      </label>
  );
};
export default FiltroColor