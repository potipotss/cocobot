var apiai = require('apiai');

var app = apiai("34f651e8ae9c46df8a59b454db725e26");

var request = app.textRequest('<Your text query>', {
    sessionId: '<unique session id>'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
