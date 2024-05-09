import React from 'react';

function FilterBots({ filterChange, defaultValue }) {
  const handleChange = (event) => {
    filterChange(event.target.value);
  };

  return (
    <select onChange={handleChange} defaultValue={defaultValue}>
      <option value="All">All</option>
      <option value="Assault">Assault</option>
      <option value="Defender">Defender</option>
      <option value="Support">Support</option>
    </select>
  );
}

export default FilterBots;
