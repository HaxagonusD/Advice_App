import React, { useRef } from "react";
const Search = ({ update }) => {
  const inputRef = useRef(null);
  const doSomething = () => {
    update(inputRef.current.value);
  };
  return (
    <div>
      <input ref={inputRef} type="search"></input>
      <button onClick={doSomething}>Submit</button>
    </div>
  );
};

export default Search;
<div>This is the Search Component</div>;
