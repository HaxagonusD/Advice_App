const axios = require("axios");

const getAdvice = async () => {
  const adviceUrl = `https://api.adviceslip.com/advice`;
  const advice = await axios.get(adviceUrl);
  return advice.data.slip.advice;
};
export default getAdvice;
