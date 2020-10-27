import "./App.css";
import React, { useState, useEffect } from 'react';
import About from "./Components/About";
import Advice from "./Components/Advice";
import Search from "./Components/Search";
import getAdvice from "./services/getAdvice";
function App() {
  const [advice, setAdvice] = useState("");
  useEffect(
    () => async () => {
      setAdvice(await getAdvice());
    },
    []
  );
  return (
    <div className="App">
      <About advice={advice}/>
      <Advice />
      <Search update={setAdvice}/>
    </div>
  );
}

export default App;
