import React from "react";

const Advice = ({ whatToShow }) => {
//   console.log(whatToShow);
  return (
    <div className="adviceBox">
      
      {whatToShow[0].advice}
    </div>
  );
};

export default Advice;
{/* {whatToShow.map((item, index) => (
        <p key={index}>{item.advice}</p>
      ))} */}