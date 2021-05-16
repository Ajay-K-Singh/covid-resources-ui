// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/

const fetch = require('node-fetch')
const handler = async (event, context, callback) => {
    let url = new URL('http://www.covidreliefresources.space/twitter');
    const { city, resources } = event.queryStringParameters;
    if (city) {
      url.searchParams.set('location', city);
    }
    if (resources) {
      url.searchParams.set('resources', resources);
    }
    const response = await fetch(url.href)
    .then(res => res.json())
    .catch(err => console.error(err));

  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };
};

module.exports = { handler }
