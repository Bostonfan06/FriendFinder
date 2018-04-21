var path = require('path');

module.exports = function(app){

    app.get('/', function(req, res){
        result.sendFile(path.join(_dirname + '/../public/home.html'));
    });

    app.get('/survey', function(req, res){
        result.sendFile(path.join(_dirname + '/../public/survey.html'));
    })
}