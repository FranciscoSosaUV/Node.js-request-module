// consume api 
//by Francisco Sosa 

const request = require('request-promise')

const options = {
    method: 'GET',
    uri: 'https://risingstack.com/login',
   /* qs: {
        limit: 10,
        skip: 20,                   //if you need a query string parameters, if you activate this you request will be to:
        sort: 'asc'                 //https://risingstack.com?limit=10&skip=20&sort=asc 
      },*/
    body: {
      foo: 'bar'
    },
    json: true 
      // JSON stringifies the body automatically
  }
  request(options)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (err) {
      console.log(err);
    })