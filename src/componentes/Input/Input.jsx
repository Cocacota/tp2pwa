import style from "./Input.moduls.css";
const Input=({holder,Charge})=>{
    return(
    <input
      className=" input-filter rounded-full"
      type="text"
      placeholder={holder}
      onChange={Charge}
    />    );
}
export default Input;