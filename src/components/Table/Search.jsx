import React from 'react';

function Search({ onSearch }) {
  return (
    <div className="p-b-1">
      <input
        type="search"
        placeholder="Søg brugere"
        onChange={onSearch.bind(this)}
      />
    </div>
  );
}

export default Search;
