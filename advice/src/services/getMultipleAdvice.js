const axios = require("axios");

const getMultipleAdvice = async (query) => {
  const adviceUrl = `https://api.adviceslip.com/advice/search/${query}`;
  const multipleAdvice = await axios.get(adviceUrl);
  
  return multipleAdvice.data.slips;
};
export default getMultipleAdvice;
