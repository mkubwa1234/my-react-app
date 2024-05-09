import React, { useState } from 'react';

function BotSearch({ handleClear, handleChange }) {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    const { value } = event.target;
    setQuery(value);
    handleChange(value);
  };

  const handleSearch = event => {
    event.preventDefault();
    handleClear(query);
    setQuery('');
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          placeholder="Search"
          value={query}
          type="text"
          onChange={handleInputChange}
        />
        <button type="submit">
          Clear
        </button>
      </form>
    </div>
  );
}

export default BotSearch;
