exports.sanitize = function(word) {
    return word.toLowerCase().replace(/-/g, ' ');
};

exports.tokenize = function(sentence) {
    return sentence.split(' ');
};

exports.info = function(callback) {
    var https = require('https');
    var options = {
        host: 'api.github.com',
        path: '/repos/garethslinn/es6_weather_app',
        method: 'GET',
        headers: {
            'User-Agent': 'garethslinn'
        }
    };
    var str = '';

    https.request(options, function(response) {
        response.on('data', function(data) {
            str += data
        })

        response.on('end', function() {
            callback(JSON.parse(str));
        })

        response.on('error', function() {
            console.log(error);
            callback(error);
        })
    }).end();
};