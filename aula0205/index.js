var fs = require('fs');
//nodemon
var express =require('express');
var app = express();
app.get('/', function(req, res) {
    res.send('Hello World!');
});
app.get('/estados', function(req, res) {
    fs.readFile(__dirname + '/estados.json', function(err, arq) {
        res.send(arq);
    });
});
app.post('/', function(req, res) {
    res.send('Hello Post!');
});
app.put('/', function(req, res) {
    res.send('Hello Post!');
});
app.delete('/', function(req, res) {
    res.send('Hello Post!');
});
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});