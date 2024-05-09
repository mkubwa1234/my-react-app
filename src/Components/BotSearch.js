import React, { useState } from 'react';

function BotSearch({ handleClear, handleChange }) {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
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
      <form>
        <input
          name="query"
          placeholder="Search"
          value={query}
          type="text"
          onChange={handleInputChange}
        />
        <button onClick={handleSearch} type="button">
          Clear
        </button>
      </form>
    </div>
  );
}

export default BotSearch;
