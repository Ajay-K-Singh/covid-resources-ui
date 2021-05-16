// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/

const fetch = require('node-fetch')
const handler = async (req, res) => {
    console.log(req, res)
    const response = await fetch("http://www.covidreliefresources.space/twitter")
    .then(res => res.json())
    .catch(err => console.error(err));

  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };
};

module.exports = { handler }
