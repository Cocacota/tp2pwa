import React from "react";

const Filter = ({ onFilter }) => {
  const handleChange = (event) => {
    
    onFilter(event.target.value.trim());
    
  };

  return (
    <input
      className=" input-filter rounded-full"
      type="text"
      placeholder="¿Qué tenes ganas de vestir hoy?"
      onChange={handleChange}
    />  );
};

export default Filter;
