const request = require('request');

request('https://salty-coast-89800.herokuapp.com/bananes', function (err, res, body) {
    console.log(body);
});