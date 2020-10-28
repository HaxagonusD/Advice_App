import "./App.css";
import React, { useEffect, useState } from "react";
import About from "./Components/About";
import Advice from "./Components/Advice";
import Search from "./Components/Search";
import getAdvice from "./services/getAdvice";
import getMultipleAdvice from "./services/getMultipleAdvice";
function App() {
  const [advice, setAdvice] = useState([{ advice: "Nothing Yet!" }]);
  const [multipleAdvice, setMultipleAdvice] = useState([
    { advice: "Nothing Yet!" },
  ]);
  const [whatToShow, setWhatToShow] = useState([{ advice: "Nothing Yet!" }]);
  const oneAdvice = async () => {
    setAdvice(`${await getAdvice()}`);
    setWhatToShow([advice]);
  };
  const moreAdvice = async (query) => {
    setMultipleAdvice(await getMultipleAdvice(query));
    setWhatToShow(multipleAdvice);
  };
  useEffect(() => console.log(advice, "|", multipleAdvice, "|", whatToShow), [
    advice,
    multipleAdvice,
  ]);
  return (
    <div className="App">
      <About />
      <Search random={oneAdvice} search={moreAdvice} />
      <Advice whatToShow={whatToShow} />
    </div>
  );
}

export default App;
