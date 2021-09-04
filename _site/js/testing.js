// const axios = require("axios");

module.exports = async () => {
  const result = await axios.get("https://aws.random.cat/meow");

  return result.data.file;
  // Ex: https:\/\/purr.objects-us-east-1.dream.io\/i\/image1-4.jpg
};