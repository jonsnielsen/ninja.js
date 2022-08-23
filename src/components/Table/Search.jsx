import React from 'react';

function Search(props) {
  const { onSearch } = props;

  return (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        placeholder="Søg brugere"
        onChange={onSearch.bind(this)}
      />
    </div>
  );
}

export default Search;
