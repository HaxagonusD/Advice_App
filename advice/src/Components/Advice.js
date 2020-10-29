import React from "react";
import "../styles/Advice/Advice.css";

const Advice = ({ whatToShow }) => {
  console.log(whatToShow);
  return (
    <div className="adviceBox">
      {whatToShow === undefined
        ? "Hurry up and get some advice..."
        : whatToShow.map((item, index) => <p key={index}>{item.advice}</p>)}
    </div>
  );
};

export default Advice;
