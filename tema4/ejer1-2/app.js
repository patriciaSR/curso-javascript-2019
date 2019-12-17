const axios = require('axios');

const ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/1';

// Make a request 
axios.get(ENDPOINT)
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get(ENDPOINT);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getUser();