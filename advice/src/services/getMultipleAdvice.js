const axios = require("axios");

const getMultipleAdvice = (query, ...functions) => {
  const adviceUrl = `https://api.adviceslip.com/advice/search/${query}`;
  axios
    .get(adviceUrl)
    .then((response) => functions.forEach((toRun) => toRun(response.data.slips)));

  //   return multipleAdvice.data.slips;
};
export default getMultipleAdvice;
