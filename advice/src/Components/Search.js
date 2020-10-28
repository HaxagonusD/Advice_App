import React, { useRef } from "react";
const Search = ({ random, search }) => {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} type="search"></input>
      <button onClick={()=>search(inputRef.current.value)}>Search for specific Advice</button>
      <button onClick={()=> random()}>Get Random Advice</button>
    </div>
  );
};

export default Search;

