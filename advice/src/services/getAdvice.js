const axios = require("axios");

const getAdvice = (...functions) => {
  const adviceUrl = `https://api.adviceslip.com/advice`;
  axios
    .get(adviceUrl)
    .then((response) =>
      functions.forEach((toRun) =>
        toRun([{ advice: response.data.slip.advice }])
      )
    );
  // return advice.data.slip.advice;
};
export default getAdvice;
