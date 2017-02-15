var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    if (request.url == '/estados') {
        fs.readFile(__dirname + '/estados.json', function(err, arquivo) {
            response.write(arquivo);
            response.end();
        });
    } else {
        fs.readFile(__dirname + '/index.html', function(err, arquivo) {
            response.write(arquivo);
            response.end();
        });
    }
});

server.listen(8001, function () {
    console.log('Executando Servidor HTTP');
})