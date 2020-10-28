import "./App.css";
import React, { useEffect, useState } from "react";
import About from "./Components/About";
import Advice from "./Components/Advice";
import Search from "./Components/Search";
import getAdvice from "./services/getAdvice";
import getMultipleAdvice from "./services/getMultipleAdvice";
function App() {
  /**So here is the deal 
   * Instead of using async await since
   * we  are not getting only one thing anymore 
   * We care going to make our service get multipleADvice and getADvice 
   * use promise syntax so .then()
   * and we are going to pass in a bunch of functions to the services 
   * and when theya re done fetching we are going make .then() run every function
   */
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
