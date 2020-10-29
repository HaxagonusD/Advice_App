import React, { useRef } from "react";
import "../styles/Search/Search.css";
const Search = ({ random, search }) => {
  const inputRef = useRef(null);

  return (
    <div className="searchBox">
      <h3>Search for specific advice using keywords</h3>
      <input ref={inputRef} type="search"></input>
      <button className="Random" onClick={() => random()}>Get Random Advice</button>

      <button className="Search" onClick={() => search(inputRef.current.value)}>
        Search for specific Advice
      </button>
    </div>
    
  );
};

export default Search;
