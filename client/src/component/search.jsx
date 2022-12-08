import React, { useState } from "react";

const Searchs = (props) => {
  let [query, setQuery] = useState("");
  return (
    <div>
      <input
        type="text"
        className="search"
        placeholder="Search for..."
        defaultValue=""
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="btn btn-secondary searchButton"
        type="button"
        onClick={(e) => props.search(query)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;