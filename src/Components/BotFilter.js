import React from 'react';

function FilterBots({ filterChange }){

  function handleChange(event){
    filterChange(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="All">All</option>
      <option value="Assault">Assault</option>
      <option value="Defender">Defender</option>
      <option value="Support">Support</option>
    </select>
  );
};

export default FilterBots;