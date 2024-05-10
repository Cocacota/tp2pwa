import Style from "./FiltroColor.moduls.css";
const FiltroColor = ({ onColorChange,color }) => {

  const handleColorChange = (event) => {
    const colorSeleccionado = event.target.value;
    const isChecked = event.target.checked;
    onColorChange(colorSeleccionado,isChecked);

  };
  return(
    <label className=" ml-16  text-black-700 text-lg text-b justify-center">
        <input type="checkbox" value={color} onChange={handleColorChange} className=" rounded-lg checked:bg-blue-500 mr-2"/>
        {color}
      </label>
  );
};
export default FiltroColor