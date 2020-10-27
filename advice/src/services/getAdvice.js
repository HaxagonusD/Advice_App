const axios = require("axios");
const adviceUrl = `https://api.adviceslip.com/advice`;
const getAdvice = async () => {
  const advice = await axios.get(adviceUrl);
  return advice.data.slip.advice;
};
export default getAdvice;
