var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    fs.readFile(__dirname + '/estados.json', function(err, arquivo) {
        var headers = {};
        headers["Access-Control-Allow-Origin"] = "*";
        headers["Content-Type"] = "application/json";
        response.writeHead(200, headers);
        response.write(arquivo);
        response.end();
    });
});

server.listen(8000, function () {
    console.log('Executando Servidor HTTP');
})